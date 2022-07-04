# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## ToDo
1. Update Agents Table to include new Custom Id field.
2. Add provision for facilities to save/update Custom Id for each Agent they work with.
3. Update `getShiftsByFacility` function to return Agents metadata with new Custom Id.
4. Replace internal database id with new Custom Id for Agents on the generated PDF report.

## Implementation
1. Update Agents Table to include new Custom Id field.

### Tasks
- Create new `varchar(100)` field in Agents Table named Custom_Id.
- The new field should be nullable with default Value set to `null`.

### Acceptance
- Agents table should have a new nullable field of type `varchar(100)` named Custom_Id.

### Estimated Time
- 1 hour

2. Add provision for facilities to save/update Custom Id for each Agent they work with.

### Tasks
- Update create Agent form to include new input to capture Custom ID.
- Update create Agent form validation to require Custom ID before submission for saving to the database.
- Update Save Agent function to include new Custom ID data while saving to the database.
- Update Edit Agent form to include new Custom ID input and it's validation to be required.
- Update Edit Agent function to include new Custom ID data while saving to the database.

### Acceptance
- Create Agent form should have an imput for Custom ID.
- Newly Added Agent data should have custom ID data saved in the Agents Table.
- Should be able to edit existing Agent to have new custom ID.

### Estimated Time
- 6 hours

3. Update `getShiftsByFacility` function to return Agents metadata with new Custom Id.
### Tasks
- Include Custom_Id field in the returned metadata for Agents in the `getShiftsByFacility` function.

### Acceptance
- Returned Shifts Data by `getShiftsByFacility` function should have Agents metadata with a custom_Id field

### Estimated Time
- 3 hours

4. Replace internal database id with new Custom Id for Agents on the generated PDF report.

### Tasks
- Update `generateReport` function to replace internal database id for Agents with the new Custom_Id for Agents on the report after converting to PDF.

### Acceptance
- New converted PDF report should have a new Custom Id field for the Agents.

### Estimated Time
- 4 hours