# Spreadsheet Rescue methodology

## Purpose

A one-time portfolio demonstration for Fink Dataworks. Every record, part reference, quantity, cost, location and count reference is synthetic. No employer, customer or mining-operation data was used.

## Start here

Read Dashboard, compare Raw data with Cleaned by Record ID, then inspect Review queue and Audit log. Excel filter buttons and frozen headers support browsing.

## Snapshot and grain

Assumed snapshot: 2026-09-30. A raw row is an imported physical-count record. Accepted stock grain is SKU + bin for this one snapshot. Same SKU in different bins remains separate. No stock quantities are summed across different units.

## Dispositions

Ready: 48 complete, nonconflicting source records. Held: 10 records requiring evidence. Duplicate: 2 exact repeated source counts. All 60 remain visible in Cleaned. Ready means valid under demonstration rules, not externally verified physical stock.

## Identity rules

Only trim and uppercase SKU text. Never remove hyphens, leading zeros, or suffixes. 00127 and 127 are different parts. BRG-6205-2RS and BRG-6205-ZZ are different bearing variants. Description conflict blocks release.

## Duplicate rule

R059 repeats R005 and R060 repeats R020. Count reference and all original payload fields match exactly. Retain the lower Record ID and exclude the repeat. R057/R058 have conflicting counts for the same SKU and bin. Both are held, neither summed nor selected.

## Safe transformations

Trim whitespace, collapse description whitespace, uppercase identifiers, map each to EA, metres to M, kg to KG and litres to L. Parse explicit numeric quantities and USD amounts. No box-to-each conversion and no fuzzy SKU matching.

## Date policy

Accept ISO YYYY-MM-DD and spelled-month dates only after calendar validation. 09/10/2026 is ambiguous. 2026-02-30 is invalid. Both remain blank in Cleaned and held for evidence. Dates in Cleaned are numeric Excel dates.

## Missing and invalid

A real zero count is valid. Missing cost, uncertain quantity, negative physical count and missing SKU remain blank where unsupported. Conflicting description is withheld. Known fields on held rows are retained but excluded from value totals.

## Valuation

Illustrative USD value equals quantity times source cost per stock unit, rounded to cents per line. Sum only Ready line values. Missing source cost is never copied from Reference. This subtotal excludes unresolved stock and is not a full inventory valuation or savings claim.

## Review workflow

Enter owner, evidence, proposed correction and reviewer/date in amber cells. Review stage is a note-taking aid, not approval. Verify every issue for a record, preserve raw inputs, append each authorized change to Audit log, update the normalized fields and disposition, then rerun identity, unit, date, duplicate and total checks.

## Refresh boundary

This is a fixed 60-row rescue snapshot, not an automated import system. Raw edits do not rerun cleaning. Classification and audit entries are static decisions. Only line values and Dashboard metrics recalculate. Adding rows requires extending formulas and Dashboard ranges, revalidating and regenerating CSVs.

## Field guide: identity

Record ID is the immutable imported-row key. Count reference identifies the source count. SKU is text. Description records the supplied part description after safe whitespace normalization. Bin is the physical storage location.

## Field guide: measures

Qty is a numeric count or amount in UOM. EA = each, M = metres, KG = kilograms, L = litres. Unit cost USD is per one stated unit. Count date is the physical-count date. Blank does not mean zero.

## Field guide: decisions

Disposition controls inclusion in the Ready extract. Issue explains exclusion. Related record links a repeat or conflicting count. Line value USD is calculated only for Ready records. Review queue has one primary issue per held record in this example.

## Audit meaning

Before and After are text representations of field values. Typed number entries record source text converted to numeric values, even when the visible digits match. Date normalization logs use ISO text. Disposition entries document every record decision.

## CSV companions

raw.csv reproduces source text. normalized.csv includes all rows and dispositions. ready.csv includes only the 48 accepted rows. exceptions.csv, audit.csv and reference.csv support review. CSVs are frozen values without formulas or formatting. Import SKU columns as Text to preserve 00127.

## Quality checks

Record IDs are unique. All 60 IDs are conserved. Ready stock keys are unique. Repeat payloads match exactly. Distinct similar SKUs and leading zeros are preserved. Totals are independently recomputed and formula inputs are tested with zero and blank values.

## Compatibility

Created as a macro-free .xlsx with standard Excel formulas and tables. Formula values and visual previews were checked with the workbook calculation engine. Native Microsoft Excel was not used for validation.

## Publication

This is a synthetic demonstration, not client work. Do not describe its illustrative value as recovered money, verified savings, or a customer outcome. Website figures describe the original snapshot and do not update when the workbook is edited.
