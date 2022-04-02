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
};

const Charts: FC<IProps> = (props: IProps) => {
    const [lessons,setLessons]=useState<any>()
  useEffect(() => {
      console.log(props.data)
    const yAxis = props.data.filter((row) => {
      return (row.school == "Greenlight" && row.camp == "Kakuma")
    });

    const lessonsArr = yAxis.map( (row)=> {
        return row.lessons;
    });
    setLessons(lessonsArr)
  }, [props.data]);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "greenLight school",
        data:lessons,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      {/* 
      assume that we will draw a linear chart with the following data:
      greenLight school
      kenya country
      kakuma camp

      by default we have the x axis
      we need y axis data
       */}
      <Line data={chartData} />
    </div>
  );
};
export default Charts;
