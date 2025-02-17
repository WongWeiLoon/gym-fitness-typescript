type props = {
    children: React.ReactNode
}

const HText = ({children}: props) => {
  return (
    <div className="basis-3/5 font-montserrat text-3xl font-bold">
        { children }
    </div>
  )
}

export default HText