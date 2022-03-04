# Converting CSS units.

def px_to_rem(px):
    # We know that 1em = 16px
    rem = px/16
    return rem

print(px_to_rem(100))
