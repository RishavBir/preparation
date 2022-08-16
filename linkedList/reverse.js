

                                        // Reverse a linkedList


function reverse(head) {

   var prev = null
   var curr = head
   var next = null
   
   while(curr != null){

    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
   }
   head = prev
   return prev
}