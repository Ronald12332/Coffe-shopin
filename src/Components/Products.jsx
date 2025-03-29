function Product ({ img, title, popular, precis, rating, votes, child }) {
  const StarFill = <> <img src='./resources/Star_fill.svg' alt='rating' /> <span>{rating}</span> <span>({votes})</span> </>
  const StarNotFill = <> <img src='./resources/Star.svg' alt='rating' /> <span style={{ color: 'var(--text-color-pr)' }}>No raitings</span> </>

  return (
    <div className='products'>
      <div className='img-product'>
        <img src={img} alt={title} />
        {popular && <span className='Popular'>Popular</span>}
      </div>
      <div className='content-texts'>
        <div className='Prices'>
          <span>{title} </span>
          <span>{precis} </span>
        </div>
        <div className='ratings'>
          {rating !== null ? StarFill : StarNotFill}
          {child && <span className='Out'>Sold out</span>}
        </div>
      </div>
    </div>
  )
}

export default Product
