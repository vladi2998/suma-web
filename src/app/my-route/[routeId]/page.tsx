"use client";
import DotsLoader from "@/components/loaders/dotsLoader";
import { StepType } from "@/components/my-route/RouteComponent";
import RouteStepSection from "@/components/my-route/RouteStepSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import capitalizeWords from "@/utils/capitalizeWords";
import { getLearningPathById } from "@/utils/learning_paths";
import { useEffect, useState } from "react";

type Step = {
  value: string;
  label: string;
};

export default function RouteById({ params }: { params: { routeId: string } }) {
  const steps = [
    { value: "0", label: "Capítulo I" },
    { value: "1", label: "Capítulo II" },
    { value: "2", label: "Capítulo III" },
    { value: "3", label: "Capítulo IV" },
    { value: "4", label: "Capítulo V" },
    { value: "5", label: "Capítulo VI" },
  ];

  const selectedStep = localStorage.getItem("selectedStep");
  const [routeTitle, setRouteTitle] = useState(params.routeId);
  const [stepList, setStepList] = useState<StepType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRouteData = async () => {
    setIsLoading(true);
    try {
      const response = await getLearningPathById(params.routeId);
      setRouteTitle(response.title);
      setStepList(response.steps);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRouteData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-132 flex items-center justify-center">
          <DotsLoader />
        </div>
      ) : (
        <div className="relative w-screen h-full flex flex-col items-center">
          <div className="w-11/12 my-4 flex justify-end text-4xl font-bold">
            {capitalizeWords(routeTitle)}
          </div>
          <Tabs
            defaultValue={selectedStep?.toString() ?? "0"}
            className="w-11/12 h-auto"
          >
            <TabsList className="w-full flex flex-col md:flex-row items-center justify-around">
              {steps.map((item: Step, idx: number) => (
                <TabsTrigger key={idx} className="w-full" value={item.value}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {stepList.map((step: StepType, idx: number) => (
              <TabsContent value={idx.toString()} key={idx}>
                {<RouteStepSection step={step} />}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}
    </>
  );
}
