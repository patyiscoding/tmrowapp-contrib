import { evaluateEmail } from './ikea';

const testMail =
  '<html lang="en-CA"><head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta content="text/html; charset=iso-8859-1"><style type="text/css">\r\n<!--\r\nbody, table, td, p, div\r\n\t{font-family:Verdana,Geneva,Kalimati,sans-serif!important}\r\n*\r\n\t{font-family:Verdana,Geneva,Kalimati,sans-serif!important}\r\n-->\r\n</style></head><body style="font-family:Verdana,Geneva,Kalimati,sans-serif; color:#333333"><div id="wrapper" style="padding:0 25px; width:642px; margin:0 auto"><div class="small_margin" style="padding:0 5px 0 5px; margin-bottom:25px; font-family:Verdana,Geneva,Kalimati,sans-serif"><table style="padding:35px 0 35px 0; width:100%"><tbody><tr><td align="left" width="105"><img alt="IKEA logo" width="105" height="35" src="https://secure.ikea.com/ms/img/html_emails/IKEA.png"> </td><td align="center"><h1 style="font-size:22px; color:#333333; font-weight:bold; font-family:Verdana,Geneva,Kalimati,sans-serif; display:table-cell">Order confirmation </h1></td><td align="right"></td></tr></tbody></table><h2 style="font-size:16px; display:block; font-family:Verdana,Geneva,Kalimati,sans-serif; padding:0px; margin-top:0px; color:#333333; margin-bottom:0px; font-weight:bold">Thank you for your order </h2><p style="font-size:16px; display:block; font-family:Verdana,Geneva,Kalimati,sans-serif; padding:0px; margin-top:0px; color:#333333; margin-bottom:0px">Your order is now being processed. Please review the order details and contact us soon as possible if any details are incorrect. </p><br></div><div id="wrapper" style="padding:0; width:642px; margin:0 auto"><table id="order_info" cellpadding="0" cellspacing="10" width="100%" style="font-size:12px; padding:0px 0px 15px; font-family:Verdana,Geneva,Kalimati,sans-serif; border-top:1px solid #CCC"><tbody><tr><td class="base_td" valign="top" style="margin:0; padding:0px; width:50%; font-family:Verdana,Geneva,Kalimati,sans-serif"><table style="width:100%; font-weight:bold; margin:0 0 15px 0"><tbody><tr><td align="right" style="font-size:12px; width:45%; padding:0 10px 0 0"><h2 style="font-size:12px; margin:0; font-weight:bold">Order number:</h2></td><td style="font-size:12px">359025737 </td></tr></tbody></table><table style="width:100%"><tbody><tr><td align="right" valign="top" style="font-size:12px; width:45%; padding:0 10px 0 0"><h2 style="font-size:12px; margin:0; font-weight:normal">Billing address </h2></td><td style="font-size:12px">Buddy&nbsp;Joe<br>1249 av de l\'hôtel de ville<br>527<br>H2X0B2,&nbsp;Montréal<br>&nbsp;QC <br>5145145555<br>buddy@hotmail.com </td></tr></tbody></table></td><td class="base_td right_col" valign="top" style="margin:0; width:50%; font-family:Verdana,Geneva,Kalimati,sans-serif"><table style="width:100%; margin:0 0 15px 0"><tbody><tr><td align="right" style="font-size:12px; width:45%; padding:0 10px 0 0"><h2 style="font-size:12px; margin:0; font-weight:normal">Order time:</h2></td><td style="font-size:12px">05 Apr 2020 - 3:59PM EDT </td></tr></tbody></table><table style="width:100%"><tbody><tr><td valign="top" align="right" style="font-size:12px; width:45%; padding:0 10px 0 0"><h2 style="font-size:12px; margin:0; font-weight:normal">Delivery address </h2></td><td style="font-size:12px">Same as billing address</td></tr></tbody></table></td></tr></tbody></table></div><div id="wrapper" style="padding:0; width:642px; margin:0 auto"><table id="delivery_info" width="100%" style="border-top:1px solid #CCC; padding-top:15px; font-family:Verdana,Geneva,Kalimati,sans-serif"><tbody><tr><td style="font-size:13px; padding:0px 0px 0px 5px; width:23%; font-family:Verdana,Geneva,Kalimati,sans-serif; vertical-align:text-top"><h2 style="font-size:13px; padding:0px; font-weight:normal; font-family:Verdana,Geneva,Kalimati,sans-serif; margin:0"><b>Delivery details:</b> </h2></td><td style="font-weight:bold; font-size:13px; font-family:Verdana,Geneva,Kalimati,sans-serif"><span class="delivery-type">Parcel</span> <div style="padding-top:5px"><div style="margin-top:0px"><div style="vertical-align:middle; display:inline-block; width:30px; height:30px; background:url(https://secure.ikea.com/ms/img/cfb_mini_bag/service-parcel-delivery_black.svg) no-repeat center; background-size:20px 20px"></div>Parcel Delivery </div><div style="font-weight:normal"><h2 style="font-size:13px; padding:5px 0 0 0; font-family:Verdana,Geneva,Kalimati,sans-serif; margin:0; font-weight:normal">Desired delivery date: <b>Tue, Apr 07 09:00 - 17:00</b> </h2></div><p style="font-size:13px; margin-bottom:15px; display:block; font-family:Verdana,Geneva,Kalimati,sans-serif; font-weight:normal">Your order is now being processed. Please review the order details and contact us soon as possible if any details are incorrect. </p></div></td></tr></tbody></table></div><div></div><div id="wrapper" style="padding:0; width:642px; margin:0 auto"><table cellpadding="0" cellspacing="0" width="100%" style="font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif"></table><table cellpadding="0" cellspacing="0" width="100%" style="font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif"><tbody><tr height="40px"><td style="color:#333333; text-align:center; font-family:Verdana; font-size:16px; font-weight:bold; letter-spacing:-0.3px; line-height:19px"><div style="vertical-align:middle; display:inline-block; width:35px; height:25px; background:url(/ms/img/cfb_mini_bag/service-parcel-delivery_black.svg) no-repeat center; background-size:25px 25px"></div><span style="vertical-align:middle">Parcel Delivery</span> </td></tr></tbody></table><table cellpadding="0" cellspacing="0" width="100%" style="font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif; border-top:1px solid #ccc"><tbody><tr><td style="padding-top:25px; width:58px; text-align:center; vertical-align:middle; font-weight:bold; font-family:Verdana,Geneva,Kalimati,sans-serif; font-size:15px"><div style="border:1px solid #CCC; padding:5px">1</div></td><td style="float:left; padding:15px 10px 0 10px; width:125px; height:125px; vertical-align:top; font-family:Verdana,Geneva,Kalimati,sans-serif"><img width="125" height="125" border="0" src="https://secure.ikea.com//ca/en/images/products/skurup-pendant-lamp__0604110_PE681110_S3.JPG" alt="SKURUP"> </td><td style="padding-top:15px; width:372px; vertical-align:top; font-family:Verdana,Geneva,Kalimati,sans-serif"><h2 style="margin:0; font-size:15px; font-weight:normal"><span style="font-size:15px; font-weight:bold; color:#333333!important; margin:0">SKURUP </span><br><span style="font-size:13px; color:#333333; padding:0px; margin:0px">Pendant lamp</span> </h2><strong style="font-size:13px">$24.99<br></strong><br><br><div class="ikea-font-normal art-nbr" style="font-size:12px">black, 15 &quot; / 38 cm </div><div style="margin:3px 0 15px 0; font-size:12px; color:#767676">Article Number :&nbsp;704.071.24 </div></td><td style="padding-top:22px; text-align:center; vertical-align:bottom; padding-bottom:15px; font-family:Verdana,Geneva,Kalimati,sans-serif; font-weight:bold; font-size:13px">Total price </td><td style="padding:22px 10px 15px 0; width:210px; font-size:13px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif; vertical-align:bottom"><strong>$24.99 </strong></td></tr></tbody></table></div><div id="wrapper" style="padding:0; width:642px; margin:0 auto"><table id="order_info_2" cellpadding="0" cellspacing="0" style="font-size:11px; border-bottom:2px solid #CCC; margin-bottom:15px; font-family:Verdana,Geneva,Kalimati,sans-serif; width:100%"><tbody><tr><td style="padding:0px 5px; font-family:Verdana,Geneva,Kalimati,sans-serif"><table cellpadding="0" cellspacing="0" style="width:100%; font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif"><tbody><tr style="width:100%"><td valign="top" valign="right" style="margin:0; padding:0; width:50%; font-family:Verdana,Geneva,Kalimati,sans-serif"><table id="payment" align="left" style="width:310px; font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif; float:left"><tbody><tr style="font-size:13px; margin-bottom:8px"><td colspan="3" style="margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sans-serif"><h2 style="font-size:13px; margin:0; font-weight:normal">Payment type</h2></td></tr><tr style="font-size:13px; margin-bottom:8px; font-weight:bold"><td colspan="3" style="margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sans-serif">VISA </td></tr><tr style="font-size:11px; color:rgb(118,118,118); padding:0px; margin:0px"><td style="margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sans-serif; width:70%">**** **** **** 1234 </td><td style="margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sans-serif">Exp. </td><td style="margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sans-serif; width:70%">05/23 </td></tr><tr align="right"><td colspan="2" class="small_space" style="padding-top:8px; margin:0; padding:0; font-family:Verdana,Geneva,Kalimati,sns-serif"></td></tr><tr><td colspan="2" class="small_space" style="margin:0; padding:0; padding-top:8px; font-family:Verdana,Geneva,Kalimati,sans-serif"></td></tr></tbody></table></td><td valign="top" style="margin:0; padding:0; width:50%; font-family:Verdana,Geneva,Kalimati,sans-serif"><table id="costs" cellspacing="0" style="font-size:11px; font-family:Verdana,Geneva,Kalimati,sans-serif; float:left; margin-bottom:30px; width:100%"><tbody><tr><td class="padding" style="font-weight:bold; font-size:13px; margin:0; padding:2px 10px; font-family:Verdana,Geneva,Kalimati,sans-serif">Subtotal </td><td class="right" style="font-weight:bold; font-size:13px; margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif">$24.99 </td></tr><tr><td class="padding" style="margin:0; padding:2px 10px; font-size:13px; font-family:Verdana,Geneva,Kalimati,sans-serif">Delivery </td><td class="right" style="margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif; font-size:13px">$7.99 </td></tr><tr><td colspan="2" style="border-bottom:1px solid #CCC"></td></tr><tr><td class="padding" style="font-weight:bold; font-size:13px; margin:0; padding:2px 10px; font-size:13px; font-family:Verdana,Geneva,Kalimati,sans-serif">Total excl. tax(es) </td><td class="right" style="font-weight:bold; font-size:13px; margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif">$32.98 </td></tr><tr><td class="padding" style="font-size:13px; margin:0; padding:2px 10px; font-family:Verdana,Geneva,Kalimati,sans-serif">GST (5%) </td><td class="right" style="font-size:13px; margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif">$1.65 </td></tr><tr><td class="padding" style="font-size:13px; margin:0; padding:2px 10px; font-family:Verdana,Geneva,Kalimati,sans-serif">QST (9.975%) </td><td class="right" style="font-size:13px; margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif">$3.29 </td></tr><tr><td colspan="2" style="border-bottom:1px solid #CCC"></td></tr><tr><td class="padding" style="font-weight:bold; font-size:15px; margin:0; padding:2px 10px; font-family:Verdana,Geneva,Kalimati,sans-serif"><b>Order total</b> </td><td class="right" style="font-weight:bold; font-size:15px; margin:0; padding:2px 10px; text-align:right; font-family:Verdana,Geneva,Kalimati,sans-serif"><b>$37.92</b> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="small_margin" style="padding-left:10px; font-family:Verdana,Geneva,Kalimati,sans-serif"><div class="more_margin" style="font-size:12px; padding:0px 0px; display:block; font-family:Verdana,Geneva,Kalimati,sans-serif"><h2 style="font-size:12px; font-family:Verdana,Geneva,Kalimati,sans-serif; margin:0">Thank you for shopping at IKEA. </h2>Please note that where an email address is provided for the purpose of completing a purchase, emails will only be sent in relation to the product(s) purchased, or for the purpose of completing the transaction. <div class="terms_of_use" style="font-size:12px; padding:0px 0px 15px; display:block; font-family:Verdana,Geneva,Kalimati,sans-serif">Your order is subject to IKEA\'s <a href="https://www.ikea.com/ms/en_CA/popup/irw_terms_conditions.html?icid=a1:ot|a3:order_confirmation_mail|cc:915">Terms of use</a> and <a href="http://www.ikea.com/ms/en_CA/customer-service/about-shopping/return-policy/index.html?icid=a1:ot|a3:order_confirmation_mail|cc:915">Return Policy</a> </div></div></div><div id="footer" style="font-size:11px; display:block; border-top:2px solid #cccccc; font-family:Verdana,Geneva,Kalimati,sans-serif; color:#333333; padding:15px 10px"><br><br>IKEA Canada 1-866-866-IKEA (4532) <br>9090 Cavendish Blvd., Montreal, QC, H4T 1Z8<br>GST/HST registration number 1024 53032 RT0001<br>QST registration number 1007776710<br><div style="height:30px">&nbsp;</div></div></div></body></html>';

describe('finds price', () => {
  test(`from IKEA order`, () => {
    const result = evaluateEmail(
      'Thank you for your order!',
      'donotreply@ikea.com',
      testMail,
      new Date('2020-04-05T20:00:32Z')
    );
    expect(result.lineItems.length).toBe(1);
    expect(result.lineItems[0].unit).toBe('CAD');
    expect(result.lineItems[0].value).toBe(37.92);
    expect(result.lineItems[0].countryCodeISO2).toBe('CA');
  });
});
