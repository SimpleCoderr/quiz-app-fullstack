type ResultInfoTypes = {
    countRightAnswer: number
    totalCountAnswer: number
}
const ResultInfo = ({countRightAnswer, totalCountAnswer}: ResultInfoTypes) => {
  return (
    <div>
    Ваш резульат:{" "}
    <span style={{fontWeight: 'bold'}}>
      {countRightAnswer}/{totalCountAnswer}
    </span>
  </div>
  )
}

export default ResultInfo
