import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Bug Bounty Program | UPVED",
  description:
    "Rules, scope, and paid rewards for UPVED's self-hosted bug bounty and vulnerability disclosure program.",
}

const SECURITY_EMAIL = "security@upved.org"

const programFacts = [
  { label: "Program type", value: "Self-hosted, public, paid bug bounty" },
  { label: "Launch date", value: "October 20, 2026" },
  { label: "Last updated", value: "October 20, 2026" },
  { label: "Rewards", value: "USD $50 – $2,500 per valid, eligible report" },
  { label: "Contact", value: SECURITY_EMAIL },
]

const rewards = [
  {
    severity: "Critical",
    cvss: "9.0 – 10.0",
    reward: "$1,000 – $2,500",
    examples: "Remote code execution, full database access, takeover of donation or admin systems",
  },
  {
    severity: "High",
    cvss: "7.0 – 8.9",
    reward: "$500 – $1,000",
    examples: "Stored XSS on sensitive pages, authentication bypass, exposure of donor or member PII",
  },
  {
    severity: "Medium",
    cvss: "4.0 – 6.9",
    reward: "$150 – $500",
    examples: "CSRF on state-changing actions, IDOR with limited data, reflected XSS",
  },
  {
    severity: "Low",
    cvss: "0.1 – 3.9",
    reward: "$50 – $150",
    examples: "Minor information disclosure, open redirect with demonstrated impact",
  },
]

const inScope = [
  "https://upved.org",
  "https://www.upved.org",
  "Any other *.upved.org subdomain operated directly by UPVED",
]

const outOfScope = [
  "Third-party services we use but do not operate (for example Stripe, Vercel, email providers, and social media platforms). Report those to the vendor's own program.",
  "Denial-of-service or volumetric attacks, and findings that require them",
  "Social engineering, phishing, or physical attacks against UPVED staff, volunteers, donors, or facilities",
  "Missing security headers, cookie flags, or SPF/DKIM/DMARC settings without a demonstrated exploit",
  "Clickjacking on pages with no sensitive actions",
  "Self-XSS, logout CSRF, and CSRF on forms that change nothing sensitive",
  "Rate-limiting or brute-force issues on non-authentication endpoints",
  "Version disclosure, banner grabbing, or descriptive error messages without further impact",
  "Reports generated only by automated scanners without a validated proof of concept",
  "Vulnerabilities in outdated browsers or rooted/jailbroken devices",
  "Issues already known to us or already reported by another researcher",
]

export default function BugBountyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Bug Bounty Program
        </h1>
        <p className="text-muted-foreground">
          Rules of engagement and paid rewards for reporting security vulnerabilities to UPVED
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Program Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              UPVED protects the personal information of the donors, volunteers, and community
              members who support our environmental work. We welcome help from the security
              research community and pay rewards for valid vulnerabilities reported under the
              rules on this page.
            </p>
            <dl className="grid gap-3 sm:grid-cols-2">
              {programFacts.map((fact) => (
                <div key={fact.label} className="rounded-md border border-border p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm">
                    {fact.label === "Contact" ? (
                      <a href={`mailto:${SECURITY_EMAIL}`} className="text-primary hover:underline">
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scope</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p className="font-medium text-foreground">In scope</p>
            <ul className="list-disc pl-6 space-y-2">
              {inScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              If you are unsure whether an asset belongs to UPVED, email{" "}
              <a href={`mailto:${SECURITY_EMAIL}`} className="text-primary hover:underline">
                {SECURITY_EMAIL}
              </a>{" "}
              before testing it.
            </p>
            <p className="font-medium text-foreground">Out of scope</p>
            <ul className="list-disc pl-6 space-y-2">
              {outOfScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rewards</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Rewards are paid in US dollars. Severity is based on CVSS v3.1 and adjusted for
              the real impact on UPVED and the people whose data we hold. The final severity
              and reward amount are decided by UPVED.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Severity</TableHead>
                  <TableHead>CVSS</TableHead>
                  <TableHead>Reward</TableHead>
                  <TableHead className="hidden md:table-cell">Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rewards.map((row) => (
                  <TableRow key={row.severity}>
                    <TableCell className="font-medium text-foreground">{row.severity}</TableCell>
                    <TableCell>{row.cvss}</TableCell>
                    <TableCell>{row.reward}</TableCell>
                    <TableCell className="hidden md:table-cell whitespace-normal">
                      {row.examples}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="font-medium text-foreground">Payment terms</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Only the first researcher to report a given vulnerability is eligible. Duplicates
                are decided by the time we receive the report.
              </li>
              <li>
                Several reports with the same root cause are treated as one report and receive
                one reward.
              </li>
              <li>
                Rewards are paid within 30 days of the report being validated, by bank transfer
                or PayPal.
              </li>
              <li>
                You are responsible for any taxes on your reward. US researchers receiving $600
                or more in a calendar year must provide a Form W-9; non-US researchers must
                provide a Form W-8BEN.
              </li>
              <li>
                We cannot pay researchers in countries or on lists subject to US sanctions
                (including OFAC lists), or where payment is otherwise prohibited by law.
              </li>
              <li>
                You may ask us to donate your reward to an environmental charity of your choice
                instead.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rules of Engagement</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>To qualify for a reward and for safe harbor, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Test only the in-scope assets listed above.</li>
              <li>
                Use only accounts you created yourself. Never access, change, or delete data
                belonging to other people. If you reach personal data by accident, stop, do not
                keep a copy, and tell us in your report.
              </li>
              <li>
                Do only what is needed to prove the vulnerability. Do not pivot to other systems,
                keep access, or plant backdoors.
              </li>
              <li>
                Keep automated traffic to no more than 5 requests per second, and stop at once if
                you see any impact on site availability.
              </li>
              <li>
                Do not make real donations or payments to test payment flows, and do not submit
                fraudulent forms or newsletter sign-ups that send email to other people.
              </li>
              <li>
                Do not disclose the vulnerability publicly or to anyone else until we have
                fixed it and agreed to disclosure.
              </li>
              <li>Follow all applicable laws.</li>
            </ul>
            <p className="font-medium text-foreground">Eligibility</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must be at least 18 years old, or have written permission from a parent or
                guardian.
              </li>
              <li>
                Current and former UPVED employees, board members, contractors, and volunteers
                with system access in the past 12 months are not eligible for rewards, nor are
                their immediate family members.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Report</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Email your report to{" "}
              <a href={`mailto:${SECURITY_EMAIL}`} className="text-primary hover:underline">
                {SECURITY_EMAIL}
              </a>{" "}
              with the subject line starting <span className="font-medium text-foreground">[Bug Bounty]</span>.
              Please include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A short description of the vulnerability and its impact</li>
              <li>The affected URL, parameter, or component</li>
              <li>Step-by-step instructions to reproduce it</li>
              <li>A proof of concept (screenshots, video, or request/response pairs)</li>
              <li>Your suggested severity and any suggested fix</li>
              <li>The name or handle you would like credited, if any</li>
            </ul>
            <p>Our response targets, in business days:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acknowledge your report: within 3 days</li>
              <li>Triage and confirm severity: within 10 days</li>
              <li>Fix Critical and High issues: within 30 days of triage</li>
              <li>Fix Medium and Low issues: within 90 days of triage</li>
            </ul>
            <p>We will keep you updated on progress until the issue is resolved.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safe Harbor</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              If you make a good-faith effort to follow this policy, UPVED considers your
              research authorized. We will not pursue legal action against you or report you to
              law enforcement, including under the Computer Fraud and Abuse Act (CFAA), the
              DMCA, or similar laws, for research done under this policy.
            </p>
            <p>
              If a third party takes legal action against you for research done under this
              policy, we will make it known that your actions were authorized by us. If you are
              unsure whether a planned test follows this policy, ask us first at{" "}
              <a href={`mailto:${SECURITY_EMAIL}`} className="text-primary hover:underline">
                {SECURITY_EMAIL}
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclosure and Recognition</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              We follow coordinated disclosure. Once an issue is fixed, we will work with you on
              the timing and content of any public write-up. If we have not fixed a valid issue
              within 90 days of your report, you may ask us to agree a disclosure date, and we
              will not refuse without good reason.
            </p>
            <p>
              With your permission, we will credit you by name or handle on this page once the
              issue is resolved.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Program</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We may change the scope, rules, or rewards of this program, or end it, at any
              time. Reports received before a change are handled under the terms in place when
              we received them. The &quot;Last updated&quot; date above shows when this page last changed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
