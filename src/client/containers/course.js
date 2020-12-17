import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "courseName", headerName: "Course name", width: 130 },
  { field: "profName", headerName: "Instructor name", width: 130 },
  {
    field: "coursestarttime",
    headerName: "Course Start Time",
    type: "time",
    width: 160,
  },
  {
    field: "courseendtime",
    headerName: "Course end Time",
    type: "time",
    width: 160,
  },
  {
    field: "courseTime",
    headerName: "Course Time",
    description: "This column shows the duration of course time",
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.getValue("coursestarttime") || ""} - ${
        params.getValue("courseendtime") || ""
      }`,
  },
  { field: "courseDate", headerName: "Course Date", width: 130 },
];

const rows = [
  {
    id: 1,
    courseName: "Data Structure",
    profName: "W. Marcy",
    coursestarttime: "8:30",
    courseendtime: "10:30",
    courseDate: "Mon/Wed",
  },
  {
    id: 2,
    courseName: "Literature",
    profName: "L. Will",
    coursestarttime: "7:30",
    courseendtime: "10:20",
    courseDate: "Tues",
  },
  {
    id: 3,
    courseName: "Management Systems",
    profName: "B. Davis",
    coursestarttime: "1:15",
    courseendtime: "2:30",
    courseDate: "Mon/Thurs",
  },
  {
    id: 4,
    courseName: "Business Ethics",
    profName: "D. Rose",
    coursestarttime: "8:30",
    courseendtime: "10:30",
    courseDate: "Tues/Thurs",
  },
  {
    id: 5,
    courseName: "Music",
    profName: "V. Power",
    coursestarttime: "4:30",
    courseendtime: "6:20",
    courseDate: "Mon",
  },
  {
    id: 6,
    courseName: "Sports Health",
    profName: "W. Williams",
    coursestarttime: "6:30",
    courseendtime: "8:20",
    courseDate: "Mon/Wed/Thurs",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
