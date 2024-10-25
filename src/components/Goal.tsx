interface GoalProps {  goal: string;}

const Goal:React.FC<GoalProps> = ({goal}) => {
  return (
    <div className="bg-bg-semi rounded-lg mt-4 px-4 py-2">
      <h2 className="font-semibold inline mr-2">Úkol:</h2>
      <p className="inline">{goal}</p>
    </div>
  );
}

export default Goal;