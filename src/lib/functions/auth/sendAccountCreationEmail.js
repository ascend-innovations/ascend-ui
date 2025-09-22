import sgMail from '@sendgrid/mail'

export default async function sendAccountCreationEmail(
	supabase,
	adminSupabase,
	email,
	userId,
	portal_url,
	sendgrid_password,
) {
	const genLinkResponse = await adminSupabase.auth.admin.generateLink({
		type: 'recovery',
		email: email,
		options: {
			shouldCreateUser: false, // Ensures this is only for existing users
		},
	})

	if (genLinkResponse.error) {
		console.error('Error generating password reset link:', genLinkResponse.error.message)
		return { success: false, message: genLinkResponse.error.message }
	}
	const userResetData = genLinkResponse.data
	console.log('Password reset link generated successfully:', userResetData)

	let optVerification = await adminSupabase.auth.verifyOtp({
		type: 'email',
		token_hash: userResetData.properties.hashed_token,
	})
	const session = optVerification.data.session

	if (optVerification.error) {
		console.error('Error creating session:', optVerification.error.message)
		return { success: false, message: optVerification.error.message }
	}
	console.log('Session created successfully:', session)

	let sessionData = {
		access_token: session.access_token,
		refresh_token: session.refresh_token,
	}
	let encodedSession = btoa(JSON.stringify(sessionData))
	console.log('encodedSession:', encodedSession)

	console.log('Sending Email')
	const baseURL = portal_url
	const endpoint = '/reset-password'
	sgMail.setApiKey(sendgrid_password)
	const msg = {
		to: email,
		from: 'support@ascend-innovations.com',
		subject: 'Account Created',
		html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <style>
                  @media only screen and (max-width: 620px) {
                    table.body h1 {
                      font-size: 28px !important;
                      margin-bottom: 10px !important;
                    }

                    table.body p,
                    table.body ul,
                    table.body ol,
                    table.body td,
                    table.body span,
                    table.body a {
                      font-size: 16px !important;
                    }

                    table.body .wrapper,
                    table.body .article {
                      padding: 10px !important;
                    }

                    table.body .content {
                      padding: 0 !important;
                    }

                    table.body .container {
                      padding: 0 !important;
                      width: 100% !important;
                    }

                    table.body .main {
                      border-left-width: 0 !important;
                      border-radius: 0 !important;
                      border-right-width: 0 !important;
                    }

                    table.body .btn table {
                      width: 100% !important;
                    }

                    table.body .btn a {
                      width: 100% !important;
                    }

                    table.body .img-responsive {
                      height: auto !important;
                      max-width: 100% !important;
                      width: auto !important;
                    }
                  }
                  @media all {
                    .ExternalClass {
                      width: 100%;
                    }

                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                      line-height: 100%;
                    }

                    .apple-link a {
                      color: inherit !important;
                      font-family: inherit !important;
                      font-size: inherit !important;
                      font-weight: inherit !important;
                      line-height: inherit !important;
                      text-decoration: none !important;
                    }

                    #MessageViewBody a {
                      color: inherit;
                      text-decoration: none;
                      font-size: inherit;
                      font-family: inherit;
                      font-weight: inherit;
                      line-height: inherit;
                    }

                    .btn-primary table td:hover {
                      background-color: #34495e !important;
                    }

                    .btn-primary a:hover {
                      background-color: #34495e !important;
                      border-color: #34495e !important;
                    }
                  }
                  .title {
                    color: #544a83;
                    font-size: 24px;
                    margin-bottom: 20px;
                  }
                  a.button {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    font-size: 18px;
                    text-decoration: none;
                    padding: 5px;
                  }
                  a {
                    font-weight: 600;
                    text-decoration: underline #e7e4f4 2px;
                  }
                  a:hover {
                    text-decoration: underline #ffd449 2px;
                  }
                </style>
              </head>
              <body
                style="
                  background-color: #f6f6f6;
                  font-family: sans-serif;
                  -webkit-font-smoothing: antialiased;
                  font-size: 14px;
                  line-height: 1.4;
                  margin: 0;
                  padding: 0;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                "
              >
                <span
                  class="preheader"
                  style="
                    color: transparent;
                    display: none;
                    height: 0;
                    max-height: 0;
                    max-width: 0;
                    opacity: 0;
                    overflow: hidden;
                    mso-hide: all;
                    visibility: hidden;
                    width: 0;
                  "
                  ><!-- some preheader here --></span
                >
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="body"
                  style="
                    border-collapse: separate;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-color: #f6f6f6;
                    width: 100%;
                  "
                  width="100%"
                  bgcolor="#f6f6f6"
                >
                  <tr>
                    <td
                      style="font-family: sans-serif; font-size: 14px; vertical-align: top"
                      valign="top"
                    >
                      &nbsp;
                    </td>
                    <td
                      class="container"
                      style="
                        font-family: sans-serif;
                        font-size: 14px;
                        vertical-align: top;
                        display: block;
                        max-width: 580px;
                        padding: 10px;
                        width: 580px;
                        margin: 0 auto;
                      "
                      width="580"
                      valign="top"
                    >
                      <div
                        class="content"
                        style="
                          box-sizing: border-box;
                          display: block;
                          margin: 0 auto;
                          max-width: 580px;
                          padding: 10px;
                        "
                      >

                        <!-- START CENTERED WHITE CONTAINER -->
                        <table
                          role="presentation"
                          class="main"
                          style="
                            border-collapse: separate;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background: #ffffff;
                            border-radius: 3px;
                            width: 100%;
                          "
                          width="100%"
                        >
                          <!-- START MAIN CONTENT AREA -->
                          <tr>
                            <td
                              class="wrapper"
                              style="
                                font-family: sans-serif;
                                font-size: 14px;
                                vertical-align: top;
                                box-sizing: border-box;
                                padding: 20px;
                              "
                              valign="top"
                            >
                              <table
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                style="
                                  border-collapse: separate;
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  width: 100%;
                                "
                                width="100%"
                              >
                                <tr>
                                    <td
                                      style="
                                        width: 50px;
                                        height: 50px;
                                      "
                                      valign="center"
                                      align="left"
                                    >
                                        <img
                                          src="https://ascnd.s3.us-east-2.amazonaws.com/ascend-logo-150x150.png"
                                          alt="Ascend Innovations"
                                          style="margin: 0; border: 0; padding: 0;"
                                          width="50"
                                          height="50"
                                        />
                                    </td>
                                    <td
                                      style="
                                        width: 5000px;
                                        height: 50px;
                                        font-family: sans-serif;
                                        font-size: 14px;
                                      "
                                      valign="center"
                                      align="left"
                                    >
                                      <h1 class="title" style="margin-left: 10px; margin-top: 20px">Welcome to Ascend Innovations</h1>
                                    </td>
                                </tr>
                                <tr><td
                                    style="
                                      font-family: sans-serif;
                                      font-size: 14px;
                                      vertical-align: top;
                                      padding-top: 10px;
                                    "
                                    colspan="2"
                                    valign="top"
                                  >
                                    <p>An account has been created for you using this email address.</p>
                                    <p>To get started, you'll need to set your password.</p>
                                    <p>
                                      <a style="color: #AA4111;" href="${baseURL}${endpoint}?data=${encodedSession}"
                                        >Set Your Password</a
                                      >
                                    </p>
                                    <p>This link will expire in 10 hours for security reasons.</p>
                                  </td>

                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- END MAIN CONTENT AREA -->
                        </table>
                        <!-- END CENTERED WHITE CONTAINER -->
                      </div>
                    </td>
                    <td
                      style="font-family: sans-serif; font-size: 14px; vertical-align: top"
                      valign="top"
                    >
                      &nbsp;
                    </td>
                  </tr>
                </table>
              </body>
            </html>
        `,
	}

	try {
		await sgMail.send(msg)

		console.log(`Account creation email sent to ${email}`)

		let details = {
			invite_sent_datetime: new Date().toISOString(),
		}

		const { error: profileError } = await supabase.from('profiles').update(details).eq('id', userId)

		return { success: true, message: 'Account Invite Sent' }
	} catch (error) {
		console.error('Error sending email:', error)
		return { success: false, message: error }
	}
}
