


const aboutme = [
	{}
]

const skills = [
	{skill: 'Languages', content: 'Python, C++, C, Java, Javascript, CSS/HTML, SQL'}, 
	{skill: 'Frameworks', content: 'Flask, PostgreSQL, React Native, Next.js, Tailwind CSS, Bootstrap5'},
	{skill: 'Developer Tools', content: 'Visual Studio Code, Docker, Jupyter Notebook, Vim, Xcode, Postman, Git, Jira'},
	{skill: 'Libraries', content: 'PyTorch, TensorFlow, Pandas, NumPy, Keras, BeautifulSoup, Scrapy, Selenium, OpenMP, MPI, Qiskit, OpenCV'}, 
	{skill: 'Services', content: 'AWS: SageMaker, S3, EC2, CloudWatch, CodeCommit, CodeBuild'}, 
	{skill: 'Mathematical fundamentals', content: 'Geometry, Linear Algebra, Vector Calculus, Probability, and Statistics'},
	{skill: 'Computer Science fundamentals', content: 'Data Structure, Algorithms Analysis, Computer Vision, Natural Language Processing, Computer System Design, Computational Models'},
]


export default function Page() { 

	return (
		<div className="flex flex-col">
			<div className="p-2">
				<h1 className="p-1">About Me</h1>
				<p className="p-1">I am a skilled and passionate machine learning engineer with a Master&apos;s degree in Scientific Computing and Applied Mathematics from UCSC, where I received the SciCAM Master&apos;s Program and Next Gen. SAM Scholar honors. My domain expertise lies in natural language processing and computer vision, and I have a strong interest in data mining, generative AI, and large language models.</p>

				<p className="p-1">In my most recent role, I was a Team Athena Member at UCSC, where I collaborated with my peers to build a conversational AI system that can generate accurate and contextually relevant responses, leveraging pre-trained language models and AWS services. I also integrated computer vision techniques to enable aerial vision-and-dialog navigation for drones, using a photorealistic simulator and a novel dataset that I helped collect. These projects resulted in multiple publications, a $50,000 award, and significant improvements in project efficiencies and user ratings. Additionally, I have been involved in research projects on building a website for research paper filtering and building dynamical models to distinguish the drosophila genes. I have also served as a graduate teaching assistant for several courses on mathematical methods, calculus, and high-performance computing.</p>

				<p className="p-1">I am committed to contributing my skills and knowledge to make meaningful advancements in the fields of computer science and machine learning. I am always eager to learn new technologies and methods, and to apply them to real-world problems. I value teamwork, innovation, and diversity, and I strive to deliver high-quality and impactful solutions.</p>
			</div>
			

			<div className="p-2">
				{skills.map((skill) => {
					return(
						<h3 key={skill.skill}className='p-2'>&bull; {skill.skill}: {skill.content}</h3>
					);
				})}
			</div>
		</div>











	)
}