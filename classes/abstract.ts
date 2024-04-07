abstract class Base {
  abstract instanciate(): void;

  print() {
    console.log("printed!");
  }
}

interface Parent {
  init(): void;
}

class Child implements Parent {
  init(): void {}
}

class GrandChild extends Base {
  instanciate(): void {
    console.log("grandchild!!");
  }
}

const p = new GrandChild();
p.print();
