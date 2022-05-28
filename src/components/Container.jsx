import React from 'react'

const Container = ({data}) => {

  if (data.loading)
  return (
    <section>
      <p>Loading...</p>
    </section>
  )

  if (data.error)
  return (
    <section>
      <p>OOps something went wrong.Please contact Anne Musyoki,your class Representative.</p>
    </section>
  )
  return (
    <section>
      {data.results &&
        data.results.results.map((image) => (
          <img key={image.id} src={image.urls.thumb} alt='' />
        ))}
    </section>
  )
}

export default Container