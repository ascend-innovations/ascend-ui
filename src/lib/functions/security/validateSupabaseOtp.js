export default function validateSupabaseOtp(otp) {
	const otpRegex = /^[0-9]{6}$/
	const passingRegex = otpRegex.test(otp)
	return typeof otp === 'string' && passingRegex
}
