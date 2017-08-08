import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bricks-grid/image', 'Integration | Component | bricks grid/image', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bricks-grid/image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bricks-grid/image}}
      template block text
    {{/bricks-grid/image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
