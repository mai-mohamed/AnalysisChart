import { FC, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ILessons } from "../../../../shared/models/lessons.model";
import {monthsArr} from "../../../../shared/utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type IProps = {
  data: ILessons[];
  school?:string
  camp?:string
};

const Charts: FC<IProps> = (props: IProps) => {
    const [lessons,setLessons]=useState<any>()
  useEffect(() => {

    const yAxis = props.data.filter((row) => {
      return (row.school == props.school && row.camp == props.camp)
    });

    const lessonsArr = yAxis.map( (row)=> {
        return row.lessons;
    });
    setLessons(lessonsArr)
  }, [props.data,props.school,props.camp]);

  const chartData = {
    labels:monthsArr,
    datasets: [
      {
        label:props.school,
        data:lessons,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};
export default Charts;
