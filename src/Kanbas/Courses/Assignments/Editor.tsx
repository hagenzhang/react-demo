import React from "react";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name </label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of of your Web
                application running on Netifly. The landing page should inlcude the following: your
                full name and section, Links to the Kanbas application, and Links to all relevant source
                code repos. The Kanbas application should include a link to navigate back to the
                landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="assignments">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="percent">Percentage</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="online">Online</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Options</label>
                    </td>
                    <td>
                        <input type="checkbox" name="entry-options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="entry-options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="entry-options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="entry-options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="entry-options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr><br />

                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due:</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />
                    </td>
                </tr><br />

                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available From</label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date"
                                        id="wd-available-from"
                                        value="2024-05-06" />
                                </td>
                                <td>
                                    <input type="date"
                                        id="wd-available-until"
                                        value="2024-05-20" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <hr />

            <table align="right">
                <tr>
                    <td>
                        <button id="wd-assignment-cancel" type="button">Cancel</button>
                    </td>
                    <td>
                        <button id="wd-assignment-save" type="button">Save</button>
                    </td>
                </tr>
            </table>

        </div>
    );
}
