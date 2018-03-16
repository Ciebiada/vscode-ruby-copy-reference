# ruby-copy-reference-ruby

Minimalistic extension that let's you copy the whole path to the class or constant in Ruby

For instance:
```ruby
module Foo
  module Bar
    class Bebop
    end
  end
end
```
Executing `copyReference` while hovering over `Bebop` will put `Foo::Bar::Bebop` into the system clipboard


This extension contributes the following commands:

* `extension.copyReference`: copies reference to the class under cursor
