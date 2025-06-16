function Node(val){
    this.val = val;
    this.next = 0;
}
function LinkedList(){
    this.head = null;
    this.size = 0;

}

let nod1 = new Node(3)
let nod2 = new Node(8)
let nod3 = new Node(9)

let mylinky = new LinkedList();
nod1.next = nod2;
nod2.next = nod3;

mylinky.head = nod1;
mylinky.size =3;

let curr = mylinky.head;

while(curr!=null){
    console.log(`${curr.val}->`)
    curr=curr.next;
}