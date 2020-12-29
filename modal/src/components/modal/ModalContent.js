import style from 'styled-components'

const Video = style.iframe`
    width: 100%;
`

const ModalContent = ({ data }) => {
  return (
    <div>
      <Video
        width="200"
        height="400"
        src="https://www.youtube.com/embed/uR8Mrt1IpXg?rel=0;amp;autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Video>
    </div>
  )
}

export default ModalContent
