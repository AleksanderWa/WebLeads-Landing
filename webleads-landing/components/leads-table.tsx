import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function LeadsTable() {
  const sampleData = [
    {
      businessName: "Mountain Visuals",
      lastChecked: "2024-08-26",
      website: "missing",
      sitePerformance: "N/A",
      reviewCount: "11",
      averageReview: "5",
      phoneNumber: "XXX-XXX-XXXX",
      email: "example@email.com",
    },
    // Add more sample data as needed
  ]

  return (
    <div className="w-full overflow-x-auto px-4 py-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Business Name</TableHead>
            <TableHead>Last checked</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Site performance</TableHead>
            <TableHead>Review Count</TableHead>
            <TableHead>Average Review</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.businessName}</TableCell>
              <TableCell>{row.lastChecked}</TableCell>
              <TableCell>{row.website}</TableCell>
              <TableCell>{row.sitePerformance}</TableCell>
              <TableCell>{row.reviewCount}</TableCell>
              <TableCell>{row.averageReview}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

