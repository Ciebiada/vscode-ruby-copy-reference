# Ruby Copy Reference

Minimalistic extension inspired by RubyMine.
It let's you copy the whole path to the class/constant/method in Ruby

For instance:
```ruby
module Foo
  module Bar
    class Bebop
      SPIKE = 'spike'
    end
  end
end
```
Executing `copyReference` with the cursor at `Bebop` will put `Foo::Bar::Bebop` into the system clipboard
If cursor is at SPIKE it will copy `Foo::bar::Bebop::SPIKE` 

This extension contributes the following commands:

* `ruby.copyReference`: copies reference to the element under cursor

Default keybinding is: `cmd+shift+alt+c`

Enjoy!
