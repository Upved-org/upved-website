import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance & Legal | UPVED",
  description: "View our 501(c)(3) status, bylaws, and financial transparency reports.",
}

export default function LegalPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Governance & Legal</h1>
      <p className="text-muted-foreground mb-8">
        Transparency and accountability are core to our organization.
      </p>

      <Tabs defaultValue="status" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto bg-transparent p-0 gap-2 h-auto">
            <TabsTrigger value="status" className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold">501(c)(3) Status</TabsTrigger>
            <TabsTrigger value="bylaws" className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold">Bylaws</TabsTrigger>
            <TabsTrigger value="finance" className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold">Financial Transparency</TabsTrigger>
            <TabsTrigger value="report" className="px-4 h-10 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold">Annual Report</TabsTrigger>
        </TabsList>

        <TabsContent value="status">
            <div className="p-6 border rounded-xl bg-card">
              <h2 className="text-xl font-semibold mb-2">Tax-Exempt Status</h2>
              <p className="text-muted-foreground">UPVED is a registered 501(c)(3) non-profit organization. Documentation available upon request.</p>
            </div>
        </TabsContent>

        <TabsContent value="bylaws">
            <div className="p-6 border rounded-xl bg-card">
              <h2 className="text-xl font-semibold mb-2">Organizational Bylaws</h2>
              <p className="text-muted-foreground">Our governing documents outline our structure and operational procedures.</p>
            </div>
        </TabsContent>

        <TabsContent value="finance">
             <div className="p-6 border rounded-xl bg-card">
              <h2 className="text-xl font-semibold mb-2">Financials</h2>
              <p className="text-muted-foreground">We believe in full financial transparency with our community.</p>
            </div>
        </TabsContent>

        <TabsContent value="report">
            <div className="p-6 border rounded-xl bg-card">
              <h2 className="text-xl font-semibold mb-2">Annual Reports</h2>
              <p className="text-muted-foreground">Review our impact and progress over the years.</p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
