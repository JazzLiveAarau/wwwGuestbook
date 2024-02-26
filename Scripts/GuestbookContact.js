// File: GuestbookContact.js
// Date: 2024-02-22
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Functions for Guestbook contact

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Execute Contact Request ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Execute the contact request
function executeContactRequest()
{
    var b_execute = true; // TODO Remove

    var selected_contact_case_number = g_contact_case_drop_down.getSelectOptionNumber();

    var index_case = parseInt(selected_contact_case_number) - 1;

    if (index_case == 0)
    {
        ; // Do nothing. Case is not selected
    }
    else if (index_case == 1)
    {
        ChangeRecord.start();
    }
    else if (index_case == 2)
    {
        DeleteRecord.start();
    }
    else if (index_case == 3 && g_guestbook_data_last_record != null)
    {
        DeleteLastUploadedRecord.start();
    }
    else if (index_case == 3)
    {
        alert("Kein letzter beitrag ist vorhanden");
    }
    else if (index_case == 4)
    {
        ReportBug.start();
    }
    else if (index_case == 5)
    {
        UserProposal.start();
    }
    else if (index_case == 6)
    {
        OtherCase.start();
    }
    else
    {
        alert("executeContactRequest Not an implemented case= " + index_case.toString());
    }

} // executeContactRequest

class ChangeRecord
{
    // Start function. Calls sendNoticationEmail
    static start()
    {
        ChangeRecord.sendNoticationEmail();

    } // start

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_message = getContentNotificationEmail(GuestStr.emailSubjectRequestRecordChange());
        
        var name_request = g_contact_from_text_box.getValue();

        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailSubjectRequestRecordChange() + name_request;
    
        var email_bcc = '';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, ChangeRecord.finish);

    } // sendNoticationEmail

    // Finish function. Notifies the user that an email has been sent to the administrator
    static finish()
    {
        alert(GuestStr.emailWasSentToTheAdministrator(""));

        location.reload();

    } // finish

} // ChangeRecord

class DeleteRecord
{
    // Start function. Calls sendNoticationEmail
    static start()
    {
        DeleteRecord.sendNoticationEmail();

    } // start

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_message = getContentNotificationEmail(GuestStr.emailSubjectRequestRecordDelete());
        
        var name_request = g_contact_from_text_box.getValue();

        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailSubjectRequestRecordDelete() + name_request;
    
        var email_bcc = '';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, DeleteRecord.finish);

    } // sendNoticationEmail

    // Finish function. Notifies the user that an email has been sent to the administrator
    static finish()
    {
        alert(GuestStr.emailWasSentToTheAdministrator(""));

        location.reload();

    } // finish

} // DeleteRecord

class ReportBug
{
    // Start function. Calls sendNoticationEmail
    static start()
    {
        ReportBug.sendNoticationEmail();

    } // start

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_message = getContentNotificationEmail(GuestStr.emailSubjectReportBug());
        
        var name_request = g_contact_from_text_box.getValue();

        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailSubjectReportBug() + name_request;
    
        var email_bcc = '';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, ReportBug.finish);

    } // sendNoticationEmail

    // Finish function. Notifies the user that an email has been sent to the administrator
    static finish()
    {
        alert(GuestStr.emailWasSentToTheAdministrator(""));

        location.reload();

    } // finish

} // ReportBug

class UserProposal
{
    // Start function. Calls sendNoticationEmail
    static start()
    {
        UserProposal.sendNoticationEmail();

    } // start

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_message = getContentNotificationEmail(GuestStr.emailSubjectUserProposal());
        
        var name_request = g_contact_from_text_box.getValue();

        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailSubjectUserProposal() + name_request;
    
        var email_bcc = '';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, UserProposal.finish);

    } // sendNoticationEmail

    // Finish function. Notifies the user that an email has been sent to the administrator
    static finish()
    {
        alert(GuestStr.emailWasSentToTheAdministrator(""));

        location.reload();

    } // finish

} // UserProposal

class OtherCase
{
    // Start function. Calls sendNoticationEmail
    static start()
    {
        OtherCase.sendNoticationEmail();

    } // start

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_message = getContentNotificationEmail(GuestStr.emailSubjectOtherCase());
        
        var name_request = g_contact_from_text_box.getValue();

        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailSubjectOtherCase() + name_request;
    
        var email_bcc = '';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, OtherCase.finish);

    } // sendNoticationEmail

    // Finish function. Notifies the user that an email has been sent to the administrator
    static finish()
    {
        alert(GuestStr.emailWasSentToTheAdministrator(""));

        location.reload();

    } // finish

} // OtherCase

function getContentNotificationEmail(i_subject)
{
    var name_request = g_contact_from_text_box.getValue();

    var email_request = g_contact_email_text_box.getValue();

    var textarea_str = g_contact_msg_textarea.getValue();

    textarea_str = UtilString.stringWindowsToHtml(textarea_str);

    var email_from = GuestStr.emailCodeFrom();

    var email_to = GuestStr.emailCodeFrom();

    var email_subject = i_subject + name_request;

    var email_bcc = '';

    var email_message = '';

    email_message = email_message + 'Betreff: ' + i_subject + '<br>';
    email_message = email_message + 'Name: ' + name_request + '<br>';
    email_message = email_message + 'Email: ' + email_request + '<br>';
    
    email_message = email_message + 'Text: ' + '<br>' + textarea_str + '<br>';

    return email_message;

} // getContentNotificationEmail

// Functions that automatically delete the last uploaded record
class DeleteLastUploadedRecord
{
    // Start function for the deletion of the last uploaded record
    // 1. Check that local storage data exists
    // 2. Backup JazzGuestsUploaded.xml. Callback function is backupJazzGuestsXml
    static start()
    {
        if (g_guestbook_data_last_record == null)
        {
            debugGuestbookUpload('DeleteLastUploadedRecord.start g_guestbook_data_last_record is null');
    
            return;
        }    

        var xml_str = 'uploaded';

        var uploaded_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);
    
        if (uploaded_record_number <= 0)
        {
            debugGuestbookUpload('DeleteLastUploadedRecord.start An uploaded record is not found');
    
            alert("DeleteLastUploadedRecord.start An uploaded record is not found");
    
            return;
        }
    
        xml_str = 'admin';
        
        var admin_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);
    
        if (admin_record_number <= 0)
        {
            debugGuestbookUpload('DeleteLastUploadedRecord.start An admin record is not found');
    
            alert("DeleteLastUploadedRecord.start An admin record is not found");
    
            return;
        }

        UtilServer.copyFileCallback(GuestbookServer.absoluteUrlJazzGuestsUploaded(), 
        GuestbookServer.absoluteUrlJazzGuestsUploadedBackup(), 
        DeleteLastUploadedRecord.backupJazzGuestsXml);

    } // start

    // Backup JazzGuests.xml. Call back function is moveImageFromUploadedToBackupDir
    static backupJazzGuestsXml()
    {

        UtilServer.copyFileCallback(GuestbookServer.absoluteUrlJazzGuests(), 
                                    GuestbookServer.absoluteUrlJazzGuestsBackup(), 
                                    DeleteLastUploadedRecord.moveImageFromUploadedToBackupDir);

    } // backupJazzGuestsXml

    // Moves the upload image from /www/JazzGuests/Uploaded/ to the backup directory
    // Callback function is moveImageFromUploadedToBackupDir
    static moveImageFromUploadedToBackupDir()
    {
        var xml_str = 'uploaded';

        var uploaded_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);

        var uploaded_file_name = g_guests_uploaded_xml.getGuestFileName(uploaded_record_number);

        var name_no_path = UtilServer.getFileName(uploaded_file_name);
    
        var input_move_file = GuestbookServer.getUploadedXmlDirUrl() + name_no_path;
    
        var output_move_file = GuestbookServer.getBackupDirUrl() + name_no_path;

        UtilServer. moveFileCallback(input_move_file, output_move_file, DeleteLastUploadedRecord.moveImageFromJazzGuestDirToBackupDir);

    } // moveImageFromUploadedToBackupDir


    // Moves the upload image from /www/JazzGuests/ to the backup directory
    // Callback function is deleteRecordSaveJazzGuestsUploadedXml
    static moveImageFromJazzGuestDirToBackupDir()
    {
        var xml_str = 'admin';
        
        var admin_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);

        var uploaded_file_name = g_guests_xml.getGuestFileName(admin_record_number);

        var name_no_path = UtilServer.getFileName(uploaded_file_name);
    
        var input_move_file = GuestbookServer.getJazzGuestsDirUrl() + name_no_path;
    
        var output_move_file = GuestbookServer.getBackupDirUrl() + name_no_path;

        UtilServer. moveFileCallback(input_move_file, output_move_file, 
                        DeleteLastUploadedRecord.deleteRecordSaveJazzGuestsUploadedXml);

    } // moveImageFromJazzGuestDirToBackupDir

    // Deletes the upload XML record and saves the file JazzGuestsUploaded.xml
    // Callback function is deleteRecordSaveJazzGuestsdXml
    static deleteRecordSaveJazzGuestsUploadedXml()
    {
        var xml_str = 'uploaded';

        var uploaded_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);

        g_guests_uploaded_xml.deleteGuestNode(uploaded_record_number);

        UtilServer.saveFileCallback(GuestbookServer.absoluteUrlJazzGuestsUploaded(), 
                                    GuestbookServer.getPrettyPrintContent(g_guests_uploaded_xml), 
                                    DeleteLastUploadedRecord.deleteRecordSaveJazzGuestsdXml);

    } // deleteRecordSaveJazzGuestsUploadedXml

    // Deletes the XML record and saves the file JazzGuests.xml
    // Callback function is sendNoticationEmail
    static deleteRecordSaveJazzGuestsdXml()
    {
        var xml_str = 'admin';
        
        var admin_record_number = DeleteLastUploadedRecord.getDeleteRecordNumber(xml_str);

        g_guests_xml.deleteGuestNode(admin_record_number);

        UtilServer.saveFileCallback(GuestbookServer.absoluteUrlJazzGuests(), 
        GuestbookServer.getPrettyPrintContent(g_guests_xml), 
        DeleteLastUploadedRecord.sendNoticationEmail);

    } // deleteRecordSaveJazzGuestsdXml

    // Sends a notification email to the administrator
    // Callback function is finish
    static sendNoticationEmail()
    {
        var email_from = GuestStr.emailCodeFrom();

        var email_to = GuestStr.emailCodeFrom();
    
        var email_subject = GuestStr.emailGuestbookRecordDeletedSubject() + g_guestbook_data_last_record.getImageNames();
    
        var email_bcc = '';
    
        var textarea_str = g_guestbook_data_last_record.getImageText();
    
        textarea_str = UtilString.stringWindowsToHtml(textarea_str);
    
        var email_message = '';
    
        var record_date = UtilDate.getIsoDateString(g_guestbook_data_last_record.getYear(), 
                                                    g_guestbook_data_last_record.getMonth(), 
                                                    g_guestbook_data_last_record.getDay());
    
        email_message = email_message + 'Datum: ' + record_date + '<br>';
        email_message = email_message + 'Email: ' + g_guestbook_data_last_record.getImageEmail() + '<br>';
        email_message = email_message + 'Names: ' + g_guestbook_data_last_record.getImageNames() + '<br>';
        email_message = email_message + 'Title: ' + g_guestbook_data_last_record.getImageTitle() + '<br>';
        email_message = email_message + 'Band: ' + g_guestbook_data_last_record.getBand() + '<br>';
        email_message = email_message + 'Musicians: ' + g_guestbook_data_last_record.getMusicians() + '<br>';
        email_message = email_message + 'Remark: ' + g_guestbook_data_last_record.getImageRemark() + '<br>';
        email_message = email_message + 'File: ' + g_guestbook_data_last_record.getImageFile() + '<br>';
        email_message = email_message + 'Text: ' + g_guestbook_data_last_record + '<br>';
    
        UtilEmail.sendCallback(email_from, email_subject, email_message, email_to, email_bcc, DeleteLastUploadedRecord.finish);

    } // sendNoticationEmail

    // Reloads the application
    static finish()
    {
        GuestStorage.initGuestbookData();

        g_guestbook_data_last_record = null;

        alert(GuestStr.successAutomaticRemovalOfRecord());

        location.reload();

    } // finish

    // Returns the record number to delete
    // i_xml_str Eq. uploadwd JazzGuestsUploaded.xml  Eq. admin JazzGuests.xml
    // Returns negative value for failure
    static getDeleteRecordNumber(i_xml_str)
    {
        var current_xml = null;
    
        if (i_xml_str == 'uploaded')
        {
            current_xml = g_guests_uploaded_xml;
        }
        else if (i_xml_str == 'admin')
        {
            current_xml = g_guests_xml;
        }
        else
        {
            alert("DeleteLastUploadedRecord.getDeleteRecordNumber Error i_xml_str= " + i_xml_str);
    
            return -9;
        }
    
        var n_records = current_xml.getNumberOfGuestRecords();
    
        var search_title = g_guestbook_data_last_record.getImageTitle();
    
        var search_year = g_guestbook_data_last_record.getYear();
    
        var search_month = g_guestbook_data_last_record.getMonth();
    
        var search_day = g_guestbook_data_last_record.getDay();
    
        var search_file = g_guestbook_data_last_record.getImageFile();
    
    
        for (var rec_number=1; rec_number <= n_records; rec_number++)
        {
            var guest_title = current_xml.getGuestHeader(rec_number);
    
            var guest_year = current_xml.getGuestYear(rec_number);
    
            var guest_month = current_xml.getGuestMonth(rec_number);
    
            var guest_day = current_xml.getGuestDay(rec_number);
    
            var guest_file = current_xml.getGuestFileName(rec_number);
    
            if (guest_title == search_title &&
    
                guest_year == search_year && 
    
                guest_month == search_month && 
    
                guest_day == search_day )
                {
                    if (i_xml_str == 'uploaded' && guest_file == search_file)
                    {
                        debugGuestbookUpload('DeleteLastUploadedRecord.getDeleteRecordNumber uploaded rec_number= ' + rec_number.toString());
    
                        return rec_number;
                    }
                    else if (i_xml_str == 'admin')
                    {
                        debugGuestbookUpload('DeleteLastUploadedRecord.getDeleteRecordNumber admin rec_number= ' + rec_number.toString());
    
                        return rec_number;
                    }
    
                } // properties equal
    
        } // rec_number

        debugGuestbookUpload('DeleteLastUploadedRecord.getDeleteRecordNumber Error. Record is NOT found ');
    
        return -1;
    
    } // getDeleteRecordNumber

} // DeleteLastUploadedRecord


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Execute Contact Request /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Contact Controls //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set the contact dropdown texts. Hide and display also elements
function setContactDropdownTexts()
{
    var names_txt = g_guestbook_data.getImageNames();

    var email_txt = g_guestbook_data.getImageEmail();

    g_contact_from_text_box.setValue(names_txt);

    g_contact_email_text_box.setValue(email_txt);

    if (g_guestbook_data_last_record != null)
    {
        var iso_date_str = UtilDate.getIsoDateString(g_guestbook_data_last_record.getYear(), 
        g_guestbook_data_last_record.getMonth(), g_guestbook_data_last_record.getDay());

        var last_record_txt = g_guestbook_data_last_record.getImageTitle() + ' Datum: ' + iso_date_str;

        g_last_record_text_box.setValue(last_record_txt);

        displayElementDivContactTextBoxLastRecord();

    }
    else
    {
        hideElementDivContactTextBoxLastRecord();
    }

    var selected_contact_case_number = g_contact_case_drop_down.getSelectOptionNumber();

    var index_case = parseInt(selected_contact_case_number) - 1;

    if (index_case == 0)
    {
        hideElementDivContactMessageTextArea();

        hideElementDivContactSendButton();

        debugGuestbookUpload('setContactDropdownTexts Case not selected');

    }
    else if (index_case == 1)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();

        debugGuestbookUpload('setContactDropdownTexts Beitrag ändern');

        g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextCaseChangeRecord());

        g_contact_msg_textarea.setValue(GuestStr.textTextAreaContactTextCaseChangeRecord());

    }
    else if (index_case == 2)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();

        debugGuestbookUpload('setContactDropdownTexts Beitrag löschen');

        g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextCaseDeleteRecord());

        g_contact_msg_textarea.setValue(GuestStr.textTextAreaContactTextCaseDeleteRecord());

    }
    else if (index_case == 3)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();

        debugGuestbookUpload('setContactDropdownTexts Letzter Beitrag löschen');

        if (g_guestbook_data_last_record != null)
        {

            g_contact_msg_textarea.setValue(GuestStr.titleTextAreaContactTextCaseAutoDelete());


            g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextCaseAutoDelete());
        }
        else
        {
            g_contact_msg_textarea.setPlaceholderText("");

            g_contact_msg_textarea.setValue(GuestStr.errorAutomaticDeleteNotAvailable());

            hideElementDivContactSendButton();

        }

    }
    else if (index_case == 4)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();

        debugGuestbookUpload('setContactDropdownTexts Fehler melden');

        g_contact_msg_textarea.setValue(GuestStr.textTextAreaContactTextCaseReportBug());

        g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextCaseReportBug());

    }
    else if (index_case == 5)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();
        
        debugGuestbookUpload('setContactDropdownTexts Vorschlag machen');

        g_contact_msg_textarea.setValue(GuestStr.textTextAreaContactTextMakeProposal());

        g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextMakeProposal());
    }
    else if (index_case == 6)
    {
        displayElementDivContactMessageTextArea();

        displayElementDivContactSendButton();
        
        debugGuestbookUpload('setContactDropdownTexts Anderes');

        g_contact_msg_textarea.setValue(GuestStr.textTextAreaContactTextOtherMessage());

        g_contact_msg_textarea.setPlaceholderText(GuestStr.placeholderTextAreaContactTextOtherMessage());
    }
    else
    {
        g_contact_msg_textarea.setPlaceholderText("setContactDropdownTexts Not an implemented case index= " + index_case.toString());

        g_contact_msg_textarea.setValue("setContactDropdownTexts Not an implemented case index= " + index_case.toString());

        alert("setContactDropdownTexts Not an implemented case index= " + index_case.toString());
        
    }

} // setContactDropdownTexts


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Contact Controls ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
