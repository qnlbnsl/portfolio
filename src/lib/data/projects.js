export const projects = [
	{
		id: 'ai-ultrasound',
		title: 'Scalable AI Image Generation for Ultrasound',
		shortDescription:
			'High-fidelity baby ultrasound imaging using Stable Diffusion and LoRa embeddings',
		thumbnail: '/placeholder.svg?height=300&width=400',
		image: '/placeholder.svg?height=600&width=800',
		categories: ['ai', 'healthcare'],
		technologies: ['Stable Diffusion', 'LoRa', 'RabbitMQ', 'Python', 'Kubernetes'],
		abstract:
			'This project implements a scalable system for generating high-fidelity ultrasound images using AI. By leveraging Stable Diffusion models with custom LoRa embeddings, we created a solution that can produce realistic ultrasound imagery for training and demonstration purposes.',
		architecture: '/placeholder.svg?height=500&width=800',
		technicalDetails: [
			{
				title: 'Model Architecture',
				content:
					'We fine-tuned Stable Diffusion using LoRa (Low-Rank Adaptation) to specialize in ultrasound imagery. This approach allowed us to achieve high-quality results with minimal training data and computational resources.',
				code: 'from diffusers import StableDiffusionPipeline\nimport torch\n\nmodel_id = "path/to/lora/model"\npipe = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-2-1")\npipe.unet.load_attn_procs(model_id)\npipe.to("cuda")'
			},
			{
				title: 'Distributed Processing',
				content:
					'To handle high volumes of generation requests, we implemented a distributed system using RabbitMQ for task distribution and Kubernetes for autoscaling. This architecture allows the system to scale horizontally based on demand.'
			}
		],
		outcomes: [
			'Developed proof-of-concept system for AI-generated ultrasound training imagery',
			'Implemented scalable architecture using Kubernetes and message queuing',
			'Explored machine learning approaches for medical imaging applications',
			'Demonstrated technical feasibility of AI-assisted medical training tools'
		],
		github: null
	},
	{
		id: 'alice',
		title: 'ALICE: Adaptive Linguistic Interpreter & Command Executor',
		shortDescription:
			'NLP-driven system for processing general statements, questions, and executable tasks',
		thumbnail: '/placeholder.svg?height=300&width=400',
		image: '/placeholder.svg?height=600&width=800',
		categories: ['ai'],
		technologies: ['LlamaIndex', 'Qdrant', 'RAG', 'Mixtral 8x7b', 'Python'],
		abstract:
			'ALICE (Adaptive Linguistic Interpreter and Command Executor) is an advanced NLP system designed to understand and process natural language inputs ranging from general statements to executable commands. The system prioritizes privacy by performing all processing locally.',
		architecture: '/placeholder.svg?height=500&width=800',
		technicalDetails: [
			{
				title: 'RAG Pipeline',
				content:
					'ALICE implements a sophisticated Retrieval-Augmented Generation (RAG) pipeline using LlamaIndex for document processing and Qdrant as the vector database. This allows the system to retrieve relevant information from its knowledge base to inform responses.',
				code: 'from llama_index import VectorStoreIndex, SimpleDirectoryReader\nfrom llama_index.vector_stores import QdrantVectorStore\n\ndocuments = SimpleDirectoryReader("data").load_data()\nindex = VectorStoreIndex.from_documents(documents)'
			},
			{
				title: 'Local Model Execution',
				content:
					'To ensure privacy, ALICE runs the Mixtral 8x7b QMoE model locally. This approach eliminates the need to send user data to external services while still providing high-quality language understanding and generation capabilities.'
			}
		],
		outcomes: [
			'Fully local processing ensures complete privacy of user data and queries',
			'Successfully handles a wide range of natural language inputs with high accuracy',
			'Extensible architecture allows for easy addition of new capabilities and knowledge domains',
			'Open-source implementation encourages community contributions and improvements'
		],
		github: 'https://github.com/qnlbnsl/A.L.I.C.E'
	},
	{
		id: 'patent',
		title: 'Patent #11734789: AR/VR Performance Improvements',
		shortDescription: 'Patented technology for enhancing performance in AR/VR applications',
		thumbnail: '/placeholder.svg?height=300&width=400',
		image: '/placeholder.svg?height=600&width=800',
		categories: ['ar-vr'],
		technologies: ['AR/VR', 'Performance Optimization', 'Patent'],
		abstract:
			'This patent covers innovative techniques for improving performance in augmented and virtual reality applications. The technology addresses key challenges in rendering efficiency, latency reduction, and user experience enhancement.',
		technicalDetails: [
			{
				title: 'Performance Optimization',
				content:
					'The patented technology includes novel approaches to optimize rendering pipelines, reduce motion-to-photon latency, and improve overall system performance in AR/VR environments.'
			},
			{
				title: 'Implementation Impact',
				content:
					'When implemented in production systems, these techniques have demonstrated significant improvements in frame rates, reduced latency, and enhanced user comfort during extended AR/VR sessions.'
			}
		],
		outcomes: [
			'Successfully patented as US Patent #11734789',
			'Applied in AR/VR training and simulation systems',
			'Improved rendering performance and reduced latency in immersive applications',
			'Enhanced user experience through optimized AR/VR system performance'
		],
		github: null
	}
];

// {
//   id: 'new-project',
//   title: 'New Project Title',
//   shortDescription: 'Brief description',
//   thumbnail: '/path/to/thumbnail.jpg',
//   image: '/path/to/main-image.jpg',
//   categories: ['category1', 'category2'],
//   technologies: ['tech1', 'tech2', 'tech3'],
//   abstract: 'Project overview...',
//   architecture: '/path/to/diagram.jpg',
//   technicalDetails: [
//     {
//       title: 'Section Title',
//       content: 'Detailed explanation...',
//       code: '// Optional code snippet'
//     }
//   ],
//   outcomes: [
//     'Outcome 1',
//     'Outcome 2'
//   ],
//   github: 'https://github.com/username/repo-name'
// }
