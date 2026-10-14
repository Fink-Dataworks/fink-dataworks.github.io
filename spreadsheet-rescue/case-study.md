# Spreadsheet Rescue: maintenance parts inventory

**Fink Dataworks · Synthetic portfolio demonstration**

A maintenance storeroom needs clear answers: which part is this, where is it stored, and can its count be trusted? This demonstration uses 60 fictional inventory records inspired by industrial maintenance and conveyor equipment.

The raw export mixes inconsistent formatting, numbers stored as text, uncertain quantities, ambiguous dates, repeated counts and similar part numbers. A tidy appearance alone would not make it reliable.

## The approach

Fink Dataworks preserved the original export and assigned every row a stable record ID. Safe corrections standardized whitespace, capitalization, explicit unit synonyms and numeric types. A field-level audit records each changed value and its rule.

Uncertainty stays visible. An unknown box size is not converted to individual parts. A missing cost stays blank. Conflicting counts for the same part and bin are held for evidence. Bearing suffixes and leading zeros remain intact: `BRG-6205-2RS` and `BRG-6205-ZZ` are distinct, as are `00127` and `127`.

## The result

- **48 records ready for use** under the documented demonstration rules.
- **10 records held for review**, each with a specific evidence request.
- **2 exact source repeats excluded** from totals and retained for traceability.
- **All 60 source rows accounted for**, with 305 audit entries covering corrections, type conversions and classification decisions.

The formula-driven dashboard shows an illustrative **$21,005.80** subtotal for accepted records only. It excludes unresolved stock and is neither a full inventory valuation nor a claim of recovered money or savings.

## Inspect the work

Download the [Excel workbook](downloads/fink-dataworks-spreadsheet-rescue.xlsx), compare the [raw data](downloads/raw.csv) with the [accepted records](downloads/ready.csv), and inspect the [review queue](downloads/exceptions.csv). The workbook includes the complete normalized dataset, a fictional part reference, an audit log and assumptions.

This is a fixed demonstration snapshot, not an automatic import tool. All data is synthetic. No employer or customer records were used, and no client outcome is implied.

Have an inventory spreadsheet that needs clearer structure and traceable corrections? [Visit Fink Dataworks](../) to get in touch.
