import React, { useState, useEffect }from "react"
import { useProduct } from "vtex.product-context"

const testFlag = () => {
  const [enableFlag, setEnableFlag] =useState(0)
  const {product} = useProduct()

  useEffect(() => {
    const isActive = product.productClusters.some((item) => {
      return item.name.includes('comprejunto')
    })

    console.log('Teste', product);

    setEnableFlag(isActive);
  }, [product])
  return (
  <div>
    <p>
      {enableFlag && <div className='wrapperImg'><img className='imagem' src="https://img.pngio.com/hd-john-barnes-nike-geometric-cool-cool-nike-logo-transparent-cool-nike-logo-png-1181_585.png"></img></div>}
    </p>
  </div>
  )
}

export default testFlag