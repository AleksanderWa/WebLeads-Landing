'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
  type ComparisonAudience,
  type ComparisonBudgetBand,
  type ComparisonEmailPriority,
  type RankedLeadSource,
  rankLeadSources,
} from '@/lib/lead-source-comparison-data'
import { cn } from '@/lib/utils'

type FormState = {
  industry: string
  location: string
  jobTitle: string
  audience: ComparisonAudience
  emailPriority: ComparisonEmailPriority
  budgetBand: ComparisonBudgetBand
}

const defaultFormState: FormState = {
  industry: '',
  location: '',
  jobTitle: '',
  audience: 'local_smb',
  emailPriority: 'important',
  budgetBand: '50_150',
}

function dataModelLabel(dataModel: RankedLeadSource['dataModel']): string {
  switch (dataModel) {
    case 'fresh_per_search':
      return 'Fresh per search'
    case 'database':
      return 'Database'
    case 'hybrid':
      return 'Hybrid'
    default:
      return 'Unknown'
  }
}

export function LeadSourceComparisonTool() {
  const [formState, setFormState] = useState<FormState>(defaultFormState)
  const [hasCompared, setHasCompared] = useState(false)

  const rankedSources = useMemo(() => {
    return rankLeadSources({
      audience: formState.audience,
      emailPriority: formState.emailPriority,
      budgetBand: formState.budgetBand,
    })
  }, [formState.audience, formState.emailPriority, formState.budgetBand])

  const handleCompare = () => {
    setHasCompared(true)
  }

  const summaryPieces = [formState.industry, formState.location, formState.jobTitle].filter(
    (value) => value.trim().length > 0,
  )

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <Card className="border border-brand-primary/10 bg-white/80 shadow-md backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-brand-primary">
            <BarChart3 className="h-5 w-5" />
            Tell us how you prospect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry (optional)</Label>
              <Input
                id="industry"
                placeholder="Plumbing, dental, legal..."
                value={formState.industry}
                onChange={(event) =>
                  setFormState((previous) => ({ ...previous, industry: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location (optional)</Label>
              <Input
                id="location"
                placeholder="City, state, or region"
                value={formState.location}
                onChange={(event) =>
                  setFormState((previous) => ({ ...previous, location: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Buyer title (optional)</Label>
              <Input
                id="jobTitle"
                placeholder="Owner, office manager..."
                value={formState.jobTitle}
                onChange={(event) =>
                  setFormState((previous) => ({ ...previous, jobTitle: event.target.value }))
                }
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Who are you mostly trying to reach?</Label>
            <RadioGroup
              value={formState.audience}
              onValueChange={(value) =>
                setFormState((previous) => ({
                  ...previous,
                  audience: value as ComparisonAudience,
                }))
              }
              className="grid gap-3 md:grid-cols-3"
            >
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.audience === 'local_smb'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="local_smb" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Local SMB</div>
                  <div className="text-sm text-gray-600">Shops and services in a city or region</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.audience === 'mixed'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="mixed" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Mixed</div>
                  <div className="text-sm text-gray-600">Some local, some broader accounts</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.audience === 'national_enterprise'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="national_enterprise" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">National / enterprise</div>
                  <div className="text-sm text-gray-600">Larger accounts across many markets</div>
                </div>
              </label>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>How important are verified emails for your workflow?</Label>
            <RadioGroup
              value={formState.emailPriority}
              onValueChange={(value) =>
                setFormState((previous) => ({
                  ...previous,
                  emailPriority: value as ComparisonEmailPriority,
                }))
              }
              className="grid gap-3 md:grid-cols-3"
            >
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.emailPriority === 'nice'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="nice" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Nice to have</div>
                  <div className="text-sm text-gray-600">You can work with partial contact info</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.emailPriority === 'important'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="important" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Important</div>
                  <div className="text-sm text-gray-600">You need reliable emails most of the time</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.emailPriority === 'critical'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="critical" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Critical</div>
                  <div className="text-sm text-gray-600">Bounces are costly for you</div>
                </div>
              </label>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>Monthly software budget (per seat, rough)</Label>
            <RadioGroup
              value={formState.budgetBand}
              onValueChange={(value) =>
                setFormState((previous) => ({
                  ...previous,
                  budgetBand: value as ComparisonBudgetBand,
                }))
              }
              className="grid gap-3 md:grid-cols-3"
            >
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.budgetBand === 'under_50'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="under_50" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">Under $50</div>
                  <div className="text-sm text-gray-600">Solo operators keeping costs tight</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.budgetBand === '50_150'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="50_150" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">$50 to $150</div>
                  <div className="text-sm text-gray-600">Typical small agency stack range</div>
                </div>
              </label>
              <label
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                  formState.budgetBand === '150_plus'
                    ? 'border-brand-primary bg-brand-primary/5'
                    : 'border-gray-200 hover:border-brand-primary/40',
                )}
              >
                <RadioGroupItem value="150_plus" className="mt-1" />
                <div>
                  <div className="font-semibold text-brand-secondary">$150+</div>
                  <div className="text-sm text-gray-600">You can pay for premium data tools</div>
                </div>
              </label>
            </RadioGroup>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Button
              type="button"
              size="lg"
              className="rounded-xl bg-brand-primary text-white shadow-lg hover:bg-brand-primary-hover"
              onClick={handleCompare}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Compare sources
            </Button>
            <Button type="button" size="lg" variant="outline" className="rounded-xl" asChild>
              <Link href="/#waitlist-form">
                Try WebLeads on a live search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {hasCompared ? (
        <Card className="border border-brand-primary/10 bg-white/80 shadow-md backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-brand-primary">Ranked sources for your inputs</CardTitle>
              <Badge className="w-fit bg-brand-secondary text-white">Heuristic model (not financial advice)</Badge>
            </div>
            {summaryPieces.length > 0 ? (
              <p className="text-sm text-gray-600">
                Context you gave: {summaryPieces.join(' · ')}
              </p>
            ) : (
              <p className="text-sm text-gray-600">Add optional fields above to personalize this headline.</p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Data model</TableHead>
                    <TableHead>Pricing (rough)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rankedSources.map((source, index) => (
                    <TableRow key={source.slug}>
                      <TableCell className="font-semibold text-brand-secondary">{index + 1}</TableCell>
                      <TableCell>
                        <div className="font-semibold text-brand-primary">{source.name}</div>
                        <div className="text-sm text-gray-600">{source.notes}</div>
                      </TableCell>
                      <TableCell className="font-semibold">{source.score}</TableCell>
                      <TableCell>{dataModelLabel(source.dataModel)}</TableCell>
                      <TableCell>{source.pricingSummary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-start gap-2 rounded-xl bg-brand-light p-4 text-sm text-gray-700">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-primary" />
              <p>
                Scores weight local prospecting fit, SMB agency fit, and email depth, then adjust for your budget
                band. Public pricing changes often, so confirm numbers on each vendor site before you buy.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
