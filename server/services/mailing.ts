interface CertificateHtmlData {
    personName: string;
    certificateUrl: string;
    certificateTitle: string;
}

const getCertificateMailHtml = (data: CertificateHtmlData) => {
    const { personName, certificateUrl, certificateTitle } = data;
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
  <style type="text/css">
    body,
    p,
    div {
      font-family: inherit;
      font-size: 14px;
    }

    body {
      color: #000000;
    }

    body a {
      color: #1188E6;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    ul ul ul ul {
      list-style-type: disc !important;
    }

    ol ol {
      list-style-type: lower-roman !important;
    }

    ol ol ol {
      list-style-type: lower-latin !important;
    }

    ol ol ol ol {
      list-style-type: decimal !important;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <!--user entered Head Start-->
  <link href="https://fonts.googleapis.com/css?family=Chivo&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Chivo', sans-serif;
    }
  </style><!--End Head user entered-->
</head>

<body>
  <center class="wrapper" data-link-color="#1188E6"
    data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#f7f7f7;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f7f7f7">
        <tr>
          <td valign="top" bgcolor="#f7f7f7" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0"
              border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="width:100%; max-width:600px;" align="center">
                          <tr>
                            <td role="modules-container"
                              style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF"
                              width="100%" align="left">
                              <table class="module preheader preheader-hide" role="module" data-type="preheader"
                                border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p></p>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                role="module" data-type="columns" style="padding:50px 30px 50px 30px;" bgcolor="#F2F2F2"
                                data-distribution="1">
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top">
                                      <table width="540"
                                        style="width:540px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                        cellpadding="0" cellspacing="0" align="left" border="0" bgcolor=""
                                        class="column column-0">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;margin:0px;border-spacing:0;">
                                              <table class="wrapper" role="module" data-type="image" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="70bf8541-5d04-42ed-95be-d461ccb09d81">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;"
                                                      valign="top" align="center">
                                                      <img class="max-width" border="0"
                                                        style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;"
                                                        width="269" alt="" data-proportionally-constrained="true"
                                                        data-responsive="false"
                                                        src="https://cdn.hemocione.com.br/events/prod/uploads/private/1722481484396-logo-email-horizontal.png"
                                                        height="84">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="module" role="module" data-type="text" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="378a178d-727b-4c10-aca9-5fe2cee40fa3"
                                                data-mc-module-version="2019-10-22">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="padding:18px 30px 10px 30px; line-height:30px; text-align:inherit;"
                                                      height="100%" valign="top" bgcolor="" role="module-content">
                                                      <div>
                                                        <h2 style="text-align: center; font-family: inherit"><span
                                                            style="font-family: helvetica, sans-serif; font-size: 18px">O
                                                            certificado "${certificateTitle}" está disponível!</span>
                                                        </h2>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="module" role="module" data-type="text" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="4c1e7fb6-9f72-422d-b10a-4050277afa29.1.1"
                                                data-mc-module-version="2019-10-22">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="padding:0px 0px 18px 0px; line-height:18px; text-align:inherit;"
                                                      height="100%" valign="top" bgcolor="" role="module-content">
                                                      <div>
                                                        <div style="font-family: inherit; text-align: center"><span
                                                            style="font-family: helvetica, sans-serif">Olá,
                                                            ${personName}!</span></div>
                                                        <div style="font-family: inherit; text-align: center"><br></div>
                                                        <div style="font-family: inherit; text-align: center"><span
                                                            style="font-family: helvetica, sans-serif">Clique no botão
                                                            abaixo para acessar seu certificado.</span></div>
                                                        <div></div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="module" role="module" data-type="spacer" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="2b57c0cf-5448-4ee0-835c-68afdb923ce0.1.1">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0px 0px 10px 0px;" role="module-content"
                                                      bgcolor="">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table border="0" cellpadding="0" cellspacing="0" class="module"
                                                data-role="module-button" data-type="button" role="module"
                                                style="table-layout:fixed;" width="100%"
                                                data-muid="9faecb59-dc1a-4a48-ad3a-7a893b1fc41b">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" bgcolor="" class="outer-td"
                                                      style="padding:0px 0px 0px 0px;">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                        class="wrapper-mobile" style="text-align:center;">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" bgcolor="#BB0B08" class="inner-td"
                                                              style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                                                              <a href="${certificateUrl}"
                                                                style="background-color:#BB0B08; border:1px solid #BB0B08; border-color:#BB0B08; border-radius:30px; border-width:1px; color:#ffffff; display:inline-block; font-size:14px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid;"
                                                                target="_blank">ACESSAR CERTIFICADO</a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="7c5a8ff0-1f7d-40f5-bd80-3949ba373484" data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td
                                      style="padding:30px 0px 0px 0px; line-height:20px; text-align:inherit; background-color:#BB0B08;"
                                      height="100%" valign="top" bgcolor="#BB0B08" role="module-content">
                                      <div>
                                        <div style="font-family: inherit; text-align: center"><span
                                            style="color: #ffffff">Entre em contato:</span></div>
                                        <div style="font-family: inherit; text-align: center"><span
                                            style="white-space-collapse: preserve; text-wrap: wrap; color: #ffffff">+55
                                            21 99159 6646</span></div>
                                        <div style="font-family: inherit; text-align: center"><span
                                            style="white-space-collapse: preserve; text-wrap: wrap; color: #ffffff">contato@hemocione.com.br</span>
                                        </div>
                                        <div style="font-family: inherit; text-align: inherit"><br></div>
                                        <div style="font-family: inherit; text-align: inherit"><br></div>
                                        <div style="font-family: inherit; text-align: center"><br></div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>
</html>`
}

export async function sendCertificateEmail(certificate: CertificateSchema, certificateUrl: string) {
    if (!certificate.person?.email || !certificate.person?.name) {
        return
    }

    const config = useRuntimeConfig();
    const { apiKey } = config.resend
    if (!apiKey) {
        return
    }

    const html = getCertificateMailHtml({
        personName: certificate.person.name,
        certificateUrl,
        certificateTitle: certificate.title
    })

    const payload = {
        to: [certificate.person.email],
        from: "Hemocione <noreply@hemocione.com.br>",
        subject: "Seu certificado chegou!",
        html,
        text: `Olá, ${certificate.person.name}! Acesse o link ${certificateUrl} para acessar seu certificado.`,
    };
    await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
    });
}