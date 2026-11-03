const test = require('node:test');
const assert = require('node:assert/strict');
const {validateLabs} = require('../tools/validate.js');
const labs = require('../src/labs.json');
const sources = require('../src/sources.json');

test('six sourced labs have 50 reachable nodes, 18 endings and 159 finite completion paths', () => {
  assert.deepEqual(labs.map(l => l.id), ['pilot','offer','scope','follow-up','ai-promise','venue']);
  const result = validateLabs(labs);
  assert.deepEqual(result.errors, []);
  assert.equal(result.nodes, 50);
  assert.equal(result.endings, 18);
  assert.equal(result.paths, 159);
  const ids = new Set(sources.map(s => s.id));
  for (const lab of labs) for (const source of lab.sourceIds) assert.ok(ids.has(source));
});

test('every lab choice leads to a finite ending with consequences and reflection', () => {
  for (const lab of labs) {
    const walk = (id, route) => {
      assert.ok(!route.includes(id), `${lab.id}: cycle ${route.join(' -> ')} -> ${id}`);
      const node = lab.nodes[id];
      assert.ok(node, `${lab.id}: dangling target ${id}`);
      if (node.ending) {
        assert.ok(node.text && node.lesson && node.reflection);
        assert.ok(!Object.hasOwn(node, 'score'), 'endings do not assign a moral-person score');
        return;
      }
      assert.ok(node.choices.length >= 2);
      for (const choice of node.choices) {
        assert.ok(choice.feedback, `${lab.id}/${id}: explain the consequence`);
        walk(choice.next, [...route,id]);
      }
    };
    walk(lab.start, []);
  }
});

test('the lab validator rejects dangling targets, cycles, unreachable nodes and unknown sources', () => {
  const dangling = structuredClone(labs[0]);
  dangling.nodes[dangling.start].choices[0].next = 'missing';
  assert.ok(validateLabs([dangling]).errors.some(e => e.includes('dangling')));
  const cycle = structuredClone(labs[0]);
  cycle.nodes[cycle.start].choices[0].next = cycle.start;
  assert.ok(validateLabs([cycle]).errors.some(e => e.includes('cycle')));
  const unreachable = structuredClone(labs[0]);
  unreachable.nodes.unreachable = {ending:'Done',text:'Done.',lesson:'Review the decision.',reflection:'What changed?'};
  assert.ok(validateLabs([unreachable]).errors.some(e => e.includes('unreachable')));
  const source = structuredClone(labs[0]); source.sourceIds = ['unknown'];
  assert.ok(validateLabs([source]).errors.some(e => e.includes('sourceIds')));
});
