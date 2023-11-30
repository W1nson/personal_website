

export default async function Page() {
	return (
	//   <iframe src='/CV.pdf' />
		<object data="/CV.pdf" type="application/pdf" width="100%" height="100%">
			<p>Unable to display PDF file. <a href="/CV.pdf">Download</a> instead.</p>
		</object>
	)
  }