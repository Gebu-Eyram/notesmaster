import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import Link from "next/link";
const ProgressCard = () => {
  return (
    <Card x-chunk="dashboard-02-chunk-0">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>
          Get unlimited documents with Notesmaster Pro
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0  md:p-4 md:pt-0">
        <Progress value={50} />
        <p className="text-xs font-medium py-2 ">
          5 out of 10 documents created.
        </p>
      </CardContent>
      <CardFooter className="">
        <Link className="flex items-center gap-2 w-full" href="/upgrade">
          <Button className="btn btn-primary w-full">Upgrade Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgressCard;
