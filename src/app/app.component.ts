import { Component } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as ExcelIO from "@grapecity/spread-excelio";

 // Set license key
    const spread_license_key = "CE_Testing,799668418931624#B0vvE5L6lXSPlUd8gzLLhFbuR6dW5mbUVTVxVmdB5Ge8w6YS56VHRnMilWQ6RTWFBndv4kSFd7NqNncol6ZzMVNGpHe0F5TGtiTEhzQwJlMkdHWLZEVyMldU56RwZEbiFEZRplRV3CUIJ5TrMlWzhEcw9EVtN5KVZ5VPhFOlBXYmF4Y7lGS5hFVrwUSitmd8tUZK5kR5UUR6N5aycVRPh5ZhBjRrQ5VkdEToZURCV5b89WMBlEayADSmRnbBtybzomczMnMVRVUnF7LxUHexFzSzkVWph6R0hWZkNTTvYVaiojITJCLiITR5AzMDFzNiojIIJCL9kDM9gDM8UzM0IicfJye&Qf35VfiUURJZlI0IyQiwiI4EjL6BCITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI8MzNzkDMgUjMxEDMyAjMiojI4J7QiwiIn9Wa4NXZU3VRDJiOiEmTDJCLiQjM6EzM9gTM4gjN6kTO7IiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPB3kMJpEa53mbp3UNDRUbxAjZykTSvh6UpV6d4kzL6FGNKZEeXpHRFpESpNDMr9Ga0ZnclVkautCbMhTWaRGRyl5T7IVUSJGZqVkdH3SSnJlQ0NnYHBTbml6MX3WTwFWYyFlQCJWO8kHR0FTZz36MoRETilVzztF";
    GC.Spread.Sheets.LicenseKey = spread_license_key;
    // License ExcelIO 
    (ExcelIO as any).LicenseKey = spread_license_key;
    //"CE_Testing,799668418931624#B0vvE5L6lXSPlUd8gzLLhFbuR6dW5mbUVTVxVmdB5Ge8w6YS56VHRnMilWQ6RTWFBndv4kSFd7NqNncol6ZzMVNGpHe0F5TGtiTEhzQwJlMkdHWLZEVyMldU56RwZEbiFEZRplRV3CUIJ5TrMlWzhEcw9EVtN5KVZ5VPhFOlBXYmF4Y7lGS5hFVrwUSitmd8tUZK5kR5UUR6N5aycVRPh5ZhBjRrQ5VkdEToZURCV5b89WMBlEayADSmRnbBtybzomczMnMVRVUnF7LxUHexFzSzkVWph6R0hWZkNTTvYVaiojITJCLiITR5AzMDFzNiojIIJCL9kDM9gDM8UzM0IicfJye&Qf35VfiUURJZlI0IyQiwiI4EjL6BCITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI8MzNzkDMgUjMxEDMyAjMiojI4J7QiwiIn9Wa4NXZU3VRDJiOiEmTDJCLiQjM6EzM9gTM4gjN6kTO7IiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPB3kMJpEa53mbp3UNDRUbxAjZykTSvh6UpV6d4kzL6FGNKZEeXpHRFpESpNDMr9Ga0ZnclVkautCbMhTWaRGRyl5T7IVUSJGZqVkdH3SSnJlQ0NnYHBTbml6MX3WTwFWYyFlQCJWO8kHR0FTZz36MoRETilVzztF";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spreadBackColor = 'aliceblue';
  sheetName = 'Goods List';
  hostStyle = {
    width: '800px',
    height: '600px',
  };

  columnWidth = 100;

  workbookInit(args: { spread: GC.Spread.Sheets.Workbook; }) {
    let spread: GC.Spread.Sheets.Workbook = args.spread;
    let activeSheet = spread.getActiveSheet(); 


  }
}