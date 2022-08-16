

// REMOVE THE FIRST NODE FROM THE LIST

function removeFirstNode(head){
    
    if(head != null){
        return null
    }

    let temp = head
    head = head.next
    return head
}