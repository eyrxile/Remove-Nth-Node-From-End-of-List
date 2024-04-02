class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    length -= n;
    current = dummy;
    while (length > 0) {
        length--;
        current = current.next;
    }

    current.next = current.next.next;

    return dummy.next;
};

//Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(list1, 2));

const list2 = new ListNode(1);
console.log(removeNthFromEnd(list2, 1));

const list3 = new ListNode(1);
list3.next = new ListNode(2);
console.log(removeNthFromEnd(list3, 1));