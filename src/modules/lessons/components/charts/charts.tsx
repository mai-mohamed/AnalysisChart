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
import { monthsArr } from "../../../../shared/utils/constants";

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
  school?: string | string[];
  camp?: string;
  country?: string;
};

type IDataSet = {
  label: string;
  data: [];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
};
const Charts: FC<IProps> = (props: IProps) => {
  const [lessons, setLessons] = useState<any>();
  const [dataSets, setDataSets] = useState<IDataSet[]>([]);
  useEffect(() => {
    const yAxis = props.data.filter((row) => {
      return (
        row.school == props.school &&
        row.camp == props.camp &&
        row.country == props.country
      );
    });

    const lessonsArr = yAxis.map((row) => {
      return row.lessons;
    });
    setLessons(lessonsArr);
    getDataSets(lessonsArr);
  }, [props.data, props.school, props.camp, props.country]);
  
  const getDataSets = (lessonsArr:any) => {
    if (typeof props.school == "string") {
      setDataSets([
        {
          label: props.school,
          data: lessonsArr,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ]);
    } else {
      //@ts-ignore
      if (props.school?.length > 0) {
        const getLessons = (school: string) => {
          const yAxis = props.data.filter((row) => {
            return (
              row.school == school &&
              row.camp == props.camp &&
              row.country == props.country
            );
          });

          const lessonsArr = yAxis.map((row) => {
            return row.lessons;
          });
          return lessonsArr;
        };
        //@ts-ignore
        const dataSetArr = props.school.map(((item,i) => ({
          label: item,
          data: getLessons(item),
          fill: false,
          // backgroundColor: "rgba(75,192,192,0.2)",
          // borderColor: "rgba(75,192,192,1)",
           backgroundColor: `rgba(${Math.floor(Math.random() * 200) + 26},${
            Math.floor(Math.random() * 200) + 26
          },${Math.floor(Math.random() * 200) + 26},0.2)`,
          
           borderColor: `rgba(${Math.floor(Math.random() * 200) + 26},${
            Math.floor(Math.random() * 200) + 26
          },${Math.floor(Math.random() * 200) + 26},.6)`,
          
        })))
        //@ts-ignore
        setDataSets(dataSetArr);
      }
    }
  };
  const chartData = {
    labels: monthsArr,
    datasets: dataSets,
  };
  return (
    <div>
      <Line
        //@ts-ignore
        data={chartData}
      />
    </div>
  );
};
export default Charts;
