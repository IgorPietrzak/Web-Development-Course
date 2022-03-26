# Converting CSS units.

def px_to_rem(px):
    # We know that 1em = 16px
    rem = px/16
    return rem


#How far do I put each tree?
def tree_dist(tree_num):
    width = 10.773
    distance = width*(1 + tree_num)
    return distance
    
    
print(str(tree_dist(3)))
