import { memo } from 'react'

type ItemProps = {
  title: string
  onAddToWishlist: (item: string) => void
}

function ItemComponent({ title, onAddToWishlist }: ItemProps) {
  return (
    <li>
      {title}
      <button onClick={() => onAddToWishlist(title)}>
        Add to wishlist
      </button>
    </li>
  )
}

export const Item = memo(ItemComponent);
