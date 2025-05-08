import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

export function LeadsTable() {
  const sampleData = [
    {
      businessName: "ASAP Plumbing & Heating",
      lastChecked: "2024-08-26",
      website: "missing",
      sitePerformance: "N/A",
      reviewCount: "0",
      averageReview: "N/A",
      phoneNumber: "+1 215-541-4315",
      contactInfo: "1314 W Broad St #1, Quakertown, PA 18951",
      businessCategory: "Plumber",
    },
    {
      businessName: "Chaz Ritchie Sewer & Drain",
      lastChecked: "2024-08-25",
      website: "missing",
      sitePerformance: "N/A",
      reviewCount: "18",
      averageReview: "4.2",
      phoneNumber: "+1 610-770-0836",
      contactInfo: "3574 Lindberg Ave, Allentown, PA 18103",
      businessCategory: "Plumber",
    },
    {
      businessName: "Andrew O Carr Plumbing",
      lastChecked: "2024-08-24",
      website: "missing",
      sitePerformance: "N/A",
      reviewCount: "1",
      averageReview: "1.0",
      phoneNumber: "+1 610-614-1188",
      contactInfo: "Bath, PA 18014",
      businessCategory: "Plumber",
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-primary">
          {/* High-Quality Lead Examples */}
          Perfect opportunities for your agency
        </h2>
        <p className="text-xl text-center text-brand-secondary mb-10 max-w-3xl mx-auto">
          Businesses without websites or with poor ratings
        </p>
        
        <div className="w-full overflow-x-auto rounded-xl shadow-md border border-gray-100">
          <Table>
            <TableHeader className="bg-brand-light">
              <TableRow>
                <TableHead className="font-bold">Business</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="font-bold">Website</TableHead>
                <TableHead className="font-bold">Reviews</TableHead>
                <TableHead className="font-bold">Phone</TableHead>
                <TableHead className="font-bold">Opportunity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{row.businessName}</TableCell>
                  <TableCell>{row.businessCategory}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>Missing</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {parseInt(row.reviewCount) < 5 ? (
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> 
                      )}
                      <span>{row.reviewCount} reviews ({row.averageReview === "N/A" ? "N/A" : `${row.averageReview}★`})</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>
                    <div className="py-1 px-3 bg-brand-accent/20 text-brand-primary rounded-full text-sm font-medium inline-block">
                      {parseInt(row.reviewCount) < 5 ? "Bad reviews" : "Missing website"}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            These are just a few examples. Thousands of leads across multiple categories and locations are waiting for you.
          </p>
        </div>
      </div>
    </section>
  )
}
