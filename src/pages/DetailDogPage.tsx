import { Link, useParams } from "react-router-dom";
import { useGetDetailDogQuery } from "../store/dogsApi";
import Button from "../components/shared/Button";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";

export default function DetailDogPage() {
  const { id } = useParams<string>();

  const { data: dog, isLoading, isError } = useGetDetailDogQuery(id || "");
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="p-3 md:p-5">
      <h2 className="text-3xl text-center font-bold text-green-700 ">
        {dog?.data.attributes.name}
      </h2>
      <div className="shadow-xl p-2">
        {" "}
        <p className="mt-2 text-xl font-bold animate__animated animate__fadeInUp">
          {dog?.data.attributes.description}
        </p>
        <p className="mt-2 text-xl font-bold animate__animated animate__fadeInUp">
          The minimum weight of a male dog is {dog?.data.attributes.male_weight.min} kg, the maximum
          is {dog?.data.attributes.male_weight.max} kg.
        </p>
        <p className="mt-2 text-xl font-bold animate__animated animate__fadeInUp">
          The minimum weight of a female dog is {dog?.data.attributes.female_weight.min} kg, the
          maximum is {dog?.data.attributes.female_weight.max} kg.
        </p>
        <p className="mt-2 text-xl font-bold animate__animated animate__fadeInUp">
          Life expectancy from {dog?.data.attributes.life.min} years to{" "}
          {dog?.data.attributes.life.max} years.
        </p>
        <p className="mt-2 text-xl font-bold animate__animated animate__fadeInUp">
          {dog?.data.attributes.hypoallergenic ? "Hypoallergenic" : "Not hypoallergenic"}.
        </p>
        <Link to="/">
          <Button text="Back" />
        </Link>
      </div>
    </div>
  );
}
