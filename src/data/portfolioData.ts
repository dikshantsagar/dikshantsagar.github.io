export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface ResearchPillar {
  id: string;
  title: string;
  badge: string;
  headline: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  metrics: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  category: 'highlight' | 'vlm-physics' | 'biomedicine' | 'all';
  type: 'journal' | 'conference' | 'workshop' | 'under-review' | 'thesis';
  award?: string;
  impactFactor?: string;
  acceptanceRate?: string;
  summary: string;
  technicalDetails: string;
  pdfUrl?: string;
  externalUrl?: string;
  arxivUrl?: string;
  doi?: string;
  pmid?: string;
  bibtex: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  advisor?: string;
  bullets: string[];
  highlights: string[];
  category: 'research' | 'teaching';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  metrics: string[];
  codeUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  focus: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  highlight?: boolean;
}

export interface Teaching {
  role: string;
  course: string;
  institution: string;
  terms: string;
}

export interface ReviewerService {
  venue: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "Dikshant Sagar",
  preferredName: "Dikshant",
  title: "AI & Machine Learning PhD Researcher",
  institution: "University of California, Irvine",
  department: "Donald Bren School of Information and Computer Sciences",
  lab: "Baldi Lab",
  advisor: "Dr. Pierre Baldi",
  location: "Irvine, California",
  email: "dikshans@uci.edu",
  phone: "+1 (213) 643-9590",
  status: "3rd-Year CS Ph.D. Candidate (GPA 4.0)",
  availability: "Seeking ML / AI Research & Industry Internships",
  bioShort: "AI Researcher with 8+ years developing deep learning and foundation models for scientific discovery. Primary focus on Multimodal Biomedical AI (cellular phenotyping, de novo drug discovery, digital pathology) and physics-guided generative models (neutrino event classification at Fermilab/CERN).",
  bioLong: "I am a third-year Computer Science Ph.D. student at UC Irvine advised by Dr. Pierre Baldi. My research focuses on developing frontier artificial intelligence systems for scientific discovery, with primary emphasis on multimodal biomedical AI (cellular phenotyping, de novo drug discovery, digital pathology, neurospectroscopy) and physics-guided generative models (high-energy particle physics at Fermilab and CERN). I have authored 15+ peer-reviewed publications across venues including Nature Communications Physics, Cytometry A, Computers in Biology & Medicine, and NeurIPS workshops. Prior to UCI, I earned my M.S. in Computer Science (GPA 4.0) at Cal State LA and B.Tech in Computer Science at IIIT Delhi.",
  cvPdfUrl: "./files/CV_Dikshant_Sagar.pdf",
  socials: [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=6FOyM3IAAAAJ&hl=en",
      icon: "GraduationCap",
      label: "Citations & Papers"
    },
    {
      name: "GitHub",
      url: "https://github.com/dikshantsagar",
      icon: "Github",
      label: "@dikshantsagar"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dikshantsagar/",
      icon: "Linkedin",
      label: "Connect on LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:dikshans@uci.edu",
      icon: "Mail",
      label: "dikshans@uci.edu"
    }
  ],
  stats: [
    { label: "Peer-Reviewed Papers", value: "15+" },
    { label: "Ph.D. & M.S. GPA", value: "4.0" },
    { label: "Best Paper Honors", value: "2x" },
    { label: "Flagship Venues", value: "Nature & NeurIPS" }
  ]
};

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: "biomedical-imaging",
    title: "Multimodal Biomedical AI & Clinical Phenotyping",
    badge: "Biomedical AI & Discovery",
    headline: "Representations for Multiphoton FLAME, Edited-MRS, and Oncological Risk",
    problem: "Clinical diagnostics in dermatology, oncology, and neurospectroscopy suffer from high inter-observer variability, noisy raw sensor signals, and costly invasive pathology procedures.",
    approach: "Crafting self-supervised representations for FLAME multiphoton skin imaging, dual-encoder attention networks for edited-MRS metabolite reconstruction, and hybrid Graph Convolutional Networks (GCRS) for genomic risk stratification.",
    impact: "Reduced PRAME IHC biopsy orders by 30% saving ~$28K/1K cases annually; achieved 95% lower MSE and 450% higher SNR in GABA MRS reconstruction; 10× faster RNA-seq differential pipelines.",
    tags: ["Self-Supervised Learning", "FLAME Imaging", "Edited-MRS", "Graph Neural Networks", "Melanoma Differentiation"],
    metrics: ["-30% Biopsy Orders", "450% SNR Improvement", "IF 7.7 Journal Publication"]
  },
  {
    id: "generative-diffusion",
    title: "Physics-Guided Generative AI & Molecular Discovery",
    badge: "Generative AI & Molecules",
    headline: "Pixel-Space Trajectories & Molecular Discovery Guided by Physical Laws",
    problem: "Standard generative models hallucinate unphysical structures in molecular conformation and fail to capture complex cellular dynamics across longitudinal microscopy time-series.",
    approach: "Developing physics-conditioned diffusion denoising trajectories for hyperspectral cellular imaging (unsupervised organelle tracking) and physics-guided active generative learning for conditional de novo ligand discovery.",
    impact: "Best Paper Award at ACM-BCB CSBW 2025 and Best Paper Finalist at ACM-BCB 2023. Generated candidate drug ligands with 13.4% higher average binding affinities over SOTA baselines.",
    tags: ["Diffusion Models", "Physics-Informed ML", "De Novo Drug Discovery", "Hyperspectral Imaging", "STEM Microscopy"],
    metrics: ["⭐️ ACM-BCB Best Paper", "+13.4% Binding Affinity", "94% AUROC Organelle Phenotyping"]
  },
  {
    id: "vlm-physics",
    title: "Vision-Language Foundation Models for Science",
    badge: "Frontier VLMs & Physics",
    headline: "Multimodal Reasoning & Particle-Level Segmentation in High-Energy Physics",
    problem: "Scientific detectors (e.g. neutrino LArTPCs at Fermilab and DUNE) produce massive sparse volumetric projections. Conventional classifiers act as black boxes, failing to produce human-interpretable reasoning or simultaneous fine-grained particle segmentation.",
    approach: "Extending large foundation models (LLaMA 3.2-11B Vision-Instruct) with multi-scale segmentation decoders and QLoRA fine-tuning. Integrating unified event classification, chain-of-thought explanation generation, and particle mask predictions into an end-to-end multimodal architecture.",
    impact: "+28% boost in classification accuracy over baselines, generating physically faithful natural language rationales validated by high-energy physicists. Published in Nature Communications Physics (2026).",
    tags: ["LLaMA 3.2-11B", "Vision-Language Models", "QLoRA", "Particle Detectors", "Explainable AI", "LArTPC"],
    metrics: ["+28% Baseline Accuracy", "Single-Model Joint Reasoning", "Human-in-the-Loop Verified"]
  },
  {
    id: "agentic-systems",
    title: "Autonomous Multi-Agent AI for Scientific Systems",
    badge: "Autonomous Systems & DAQ",
    headline: "Self-Healing DAQ Operations for Massive Particle Detectors (Fermilab)",
    problem: "Real-time Data Acquisition (DAQ) operations at international scientific detectors like NOvA and DUNE face frequent distributed anomalies, requiring rare specialized physicist intervention around the clock.",
    approach: "Architecting an autonomous multi-agent framework combining multimodal anomaly detection, multi-agent RAG across technical documentation and logs, and hierarchical planning to diagnose incidents and formulate automated recovery protocols.",
    impact: "Provides autonomous detection, root-cause diagnosis, and step-by-step recovery execution, drastically cutting facility downtime and human cognitive load during high-stakes beam runs.",
    tags: ["Multi-Agent AI", "Autonomous Systems", "RAG", "Fermilab DUNE / NOvA", "Anomaly Detection", "Distributed Systems"],
    metrics: ["Multi-Modal Anomaly Detection", "Automated Root-Cause RAG", "End-to-End Orchestration"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "nat-phys-2026",
    title: "Adapting Vision-Language Models for Neutrino Event Classification in High-Energy Physics",
    authors: ["Dikshant Sagar", "K. Yu", "A. Yankelevich", "J. Bian", "Pierre Baldi"],
    venue: "Nature Communications Physics",
    year: 2026,
    month: "March",
    category: "vlm-physics",
    type: "journal",
    impactFactor: "5.8",
    summary: "Demonstrates that multimodal vision-language foundation models can be adapted to high-energy physics, performing simultaneous event classification and natural language reasoning on complex particle interaction projections.",
    technicalDetails: "Fine-tuned LLaMA 3.2-11B Vision-Instruct via QLoRA on simulated neutrino detector topologies, generating verified chain-of-thought explanations and multi-scale semantic segmentation masks.",
    externalUrl: "https://arxiv.org/abs/2509.08461",
    arxivUrl: "https://arxiv.org/abs/2509.08461",
    bibtex: `@article{sagar2026adapting,
  title={Adapting vision-language models for neutrino event classification in high-energy physics},
  author={Sagar, Dikshant and Yu, K and Yankelevich, A and Bian, J and Baldi, Pierre},
  journal={Communications Physics},
  year={2026},
  publisher={Nature Publishing Group}
}`
  },
  {
    id: "nat-mi-under-review-2026",
    title: "Explanation-Guided Fine-Tuning of Vision-Language Models for Neutrino Interaction Prediction and Human-in-the-Loop Evaluation",
    authors: ["Dikshant Sagar", "et al."],
    venue: "Nature Machine Intelligence (Under Review)",
    year: 2026,
    month: "September",
    category: "vlm-physics",
    type: "under-review",
    award: "Under Review at Nature Machine Intelligence",
    summary: "Proposes an explanation-guided alignment mechanism for VLMs in scientific discovery, incorporating particle physicist evaluations to ensure hallucinations are systematically eliminated.",
    technicalDetails: "Integrates human-in-the-loop expert ratings into direct preference optimization (DPO) and rationale-guided loss functions across LArTPC neutrino interaction datasets.",
    bibtex: `@article{sagar2026explanation,
  title={Explanation-Guided Fine-Tuning of Vision-Language Models for Neutrino Interaction Prediction and Human-in-the-Loop Evaluation},
  author={Sagar, Dikshant and others},
  journal={Under review in Nature Machine Intelligence},
  year={2026}
}`
  },
  {
    id: "neurips-ml4ps-transformers-2025",
    title: "Heterogeneous Point Set Transformers for Segmentation of Multiple View Particle Detectors",
    authors: ["E. Robles", "Dikshant Sagar", "A. Yankelevich", "J. Bian", "Pierre Baldi"],
    venue: "NeurIPS 2025 Workshop on Machine Learning for the Physical Sciences (ML4PS)",
    year: 2025,
    month: "December",
    category: "vlm-physics",
    type: "workshop",
    summary: "Introduces heterogeneous point set transformers that jointly process multiple 2D views and 3D reconstructed sparse points for high-precision particle track segmentation.",
    technicalDetails: "Leverages cross-view attention mechanisms to resolve spatial ambiguities across stereo wire-plane sensor topologies in liquid argon time-projection chambers.",
    bibtex: `@inproceedings{robles2025heterogeneous,
  title={Heterogeneous Point Set Transformers for Segmentation of Multiple View Particle Detectors},
  author={Robles, E and Sagar, Dikshant and Yankelevich, A and Bian, J and Baldi, Pierre},
  booktitle={NeurIPS Workshop on Machine Learning for the Physical Sciences},
  year={2025}
}`
  },
  {
    id: "neurips-ml4ps-stem-2025",
    title: "Angular Sparsity Invariant Tilt Series Generation in Scanning/Transmission Electron Microscopy",
    authors: ["Dikshant Sagar", "Z. Li", "S. Abdelkarim", "J. P. Patterson", "Pierre Baldi"],
    venue: "NeurIPS 2025 Workshop on Machine Learning for the Physical Sciences (ML4PS)",
    year: 2025,
    month: "December",
    category: "highlight",
    type: "workshop",
    summary: "A novel generative interpolation model that reconstructs missing high-tilt angles in electron tomography, overcoming sample radiation damage constraints.",
    technicalDetails: "Formulates a sparsity-invariant frame interpolation network yielding +6.6% PSNR and +3.3% SSIM improvements over state-of-the-art tilt-series interpolation baselines.",
    bibtex: `@inproceedings{sagar2025angular,
  title={Angular Sparsity Invariant Tilt Series Generation in Scanning/Transmission Electron Microscopy},
  author={Sagar, Dikshant and Li, Z and Abdelkarim, S and Patterson, J P and Baldi, Pierre},
  booktitle={NeurIPS Workshop on Machine Learning for the Physical Sciences},
  year={2025}
}`
  },
  {
    id: "neurips-ml4ps-lartpc-2025",
    title: "Scalable Inference for LArTPC Signal Processing with MobileU-Net and Overlap–Tile Chunking",
    authors: ["Dikshant Sagar", "et al."],
    venue: "NeurIPS 2025 Workshop on Machine Learning for the Physical Sciences (ML4PS)",
    year: 2025,
    month: "December",
    category: "vlm-physics",
    type: "workshop",
    summary: "Enables real-time, low-latency neutrino track segmentation on standard CPU hardware architectures at scientific detector facilities.",
    technicalDetails: "Designed an inverted-residual MobileU-Net coupled with overlap-tile spatial chunking, slashing peak memory usage by 84% and inference execution time by 87% without loss in segmentation fidelity.",
    bibtex: `@inproceedings{sagar2025scalable,
  title={Scalable Inference for LArTPC Signal Processing with MobileU-Net and Overlap-Tile Chunking},
  author={Sagar, Dikshant and others},
  booktitle={NeurIPS Workshop on Machine Learning for the Physical Sciences},
  year={2025}
}`
  },
  {
    id: "acm-bcb-2025-best-paper",
    title: "Physics-Guided Active Learning for New Ligand Discovery",
    authors: ["N. Dhiman", "Dikshant Sagar", "Negin Forouzesh"],
    venue: "16th ACM-BCB / 18th CSBW Workshop, Philadelphia, PA",
    year: 2025,
    month: "October",
    category: "highlight",
    type: "conference",
    award: "⭐️ Best Paper Award ⭐️",
    summary: "Award-winning framework that pairs physics-based molecular docking and energy calculations with active generative exploration for de novo ligand synthesis.",
    technicalDetails: "Employs an uncertainty-aware acquisition loop directing molecular generative models toward energetically favorable conformational subspaces, maximizing target affinity.",
    bibtex: `@inproceedings{dhiman2025physics,
  title={Physics-Guided Active Learning for New Ligand Discovery},
  author={Dhiman, N and Sagar, Dikshant and Forouzesh, Negin},
  booktitle={16th ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB)},
  year={2025},
  note={Best Paper Award}
}`
  },
  {
    id: "cytometry-a-2025",
    title: "MuSARCyto: Multi-Head Self-Attention-Based Representation Learning for Unsupervised Clustering of Cytometry Data",
    authors: ["A. Gupta", "R. Hooda", "S. Motwani", "Dikshant Sagar", "P. Aggarwal", "V. Abrol", "R. Gupta"],
    venue: "Cytometry Part A (Wiley)",
    year: 2025,
    month: "August",
    category: "biomedicine",
    type: "journal",
    impactFactor: "2.1",
    summary: "Unsupervised representation learning framework utilizing multi-head self-attention to automatically cluster high-dimensional single-cell flow cytometry populations.",
    technicalDetails: "Outperformed prior state-of-the-art flow cytometry clustering methods by an average of 14% across six international benchmark clinical datasets.",
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40785593/",
    pmid: "40785593",
    bibtex: `@article{gupta2025musarcyto,
  title={MuSARCyto: Multi-Head Self-Attention for Cytometry Data Clustering},
  author={Gupta, A and Hooda, R and Motwani, S and Sagar, Dikshant and Aggarwal, P and Abrol, V and Gupta, R},
  journal={Cytometry Part A},
  year={2025},
  publisher={Wiley Online Library}
}`
  },
  {
    id: "csbw-2024",
    title: "Enhancing Drug Discovery via Physics-Guided Deep Generative Models",
    authors: ["Dikshant Sagar", "A. Jasko", "Negin Forouzesh"],
    venue: "Computational Structural Bioinformatics Workshop (CSBW 2024), Boston, MA",
    year: 2024,
    month: "November",
    category: "biomedicine",
    type: "conference",
    summary: "Physics-conditioned generative modeling pipeline tailoring 3D molecular generation to explicit electrostatic and hydrophobic binding pocket descriptors.",
    technicalDetails: "Integrates implicit solvent electrostatic potentials directly into the generative objective, producing synthesizable drug candidates with enhanced target binding scores.",
    bibtex: `@inproceedings{sagar2024enhancing,
  title={Enhancing Drug Discovery via Physics-Guided Deep Generative Models},
  author={Sagar, Dikshant and Jasko, A and Forouzesh, Negin},
  booktitle={Computational Structural Bioinformatics Workshop},
  year={2024}
}`
  },
  {
    id: "ijsc-2024",
    title: "Detection of Large Vessel Occlusion in Ischemic Stroke Patients using Deep Residual Distilled Convolutional Networks",
    authors: ["R. Chatterjee", "Dikshant Sagar", "M. Pourhomayoun", "M. Kaur", "N. Amini"],
    venue: "International Journal of Semantic Computing (IJSC)",
    year: 2024,
    month: "June",
    category: "biomedicine",
    type: "journal",
    summary: "Emergency clinical triage model identifying Large Vessel Occlusions (LVO) in acute ischemic stroke patients from brain CT angiography scans.",
    technicalDetails: "Distilled deep residual architecture trained with knowledge distillation to enable instant, high-confidence inference on edge hospital scanners.",
    bibtex: `@article{chatterjee2024detection,
  title={Detection of Large Vessel Occlusion in Ischemic Stroke Patients using Deep Residual Distilled Convolutional Networks},
  author={Chatterjee, R and Sagar, Dikshant and Pourhomayoun, M and Kaur, M and Amini, N},
  journal={International Journal of Semantic Computing},
  year={2024}
}`
  },
  {
    id: "cureus-2024",
    title: "Clinical Features Predicting COVID-19 Severity Risk at the Time of Hospitalization",
    authors: ["Dikshant Sagar", "T. Dwivedi", "A. Gupta", "P. Aggarwal", "S. Bhatnagar", "A. Mohan", "P. Kaur", "S. Bhatnagar Sr"],
    venue: "Cureus Journal of Medical Science",
    year: 2024,
    month: "March",
    category: "biomedicine",
    type: "journal",
    impactFactor: "1.2",
    summary: "Multivariate predictive risk stratification framework identifying hematological and immunological clinical biomarkers indicative of critical ICU transfer.",
    technicalDetails: "Analyzed clinical feature correlations from multi-center hospital admissions, providing robust early-warning decision boundaries for intensive care prioritization.",
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/38690475/",
    pmid: "38690475",
    bibtex: `@article{sagar2024clinical,
  title={Clinical Features Predicting COVID-19 Severity Risk at the Time of Hospitalization},
  author={Sagar, Dikshant and Dwivedi, T and Gupta, A and Aggarwal, P and Bhatnagar, S and Mohan, A and Kaur, P and Bhatnagar, S},
  journal={Cureus},
  volume={16},
  number={3},
  year={2024}
}`
  },
  {
    id: "aimhc-2024",
    title: "Deep Residual Distilled Convolutional Learning For Detection of Large Vessel Occlusion in Ischemic Stroke Patients",
    authors: ["R. Chatterjee", "Dikshant Sagar", "M. Pourhomayoun", "M. Kaur", "N. Amini"],
    venue: "1st IEEE International Conference on Artificial Intelligence, Medicine, Health and Care (AIMHC 2024)",
    year: 2024,
    month: "February",
    category: "biomedicine",
    type: "conference",
    acceptanceRate: "28.3%",
    summary: "Initial conference publication demonstrating deep residual distillation for rapid CT angiogram classification under severe emergency time constraints.",
    technicalDetails: "Constructed student-teacher convolutional distillations achieving 28.3% selective review standards at IEEE AIMHC.",
    pdfUrl: "./files/AIMHC_2024.pdf",
    externalUrl: "https://ieeexplore.ieee.org/abstract/document/10504351",
    bibtex: `@inproceedings{chatterjee2024deep,
  title={Deep Residual Distilled Convolutional Learning For Detection of Large Vessel Occlusion in Ischemic Stroke Patients},
  author={Chatterjee, R and Sagar, Dikshant and Pourhomayoun, M and Kaur, M and Amini, N},
  booktitle={IEEE International Conference on Artificial Intelligence, Medicine, Health and Care (AIMHC)},
  year={2024}
}`
  },
  {
    id: "isvc-2023",
    title: "Deep Learning Based GABA Edited-MRS Signal Reconstruction",
    authors: ["Dikshant Sagar", "F. Mohammadi", "M. Pourhomayoun", "J. Joen", "N. Amini"],
    venue: "18th International Symposium on Visual Computing (ISVC 2023), Lake Tahoe, NV",
    year: 2023,
    month: "October",
    category: "biomedicine",
    type: "conference",
    acceptanceRate: "30.0%",
    summary: "Dual-encoder self-attention deep learning architecture that reconstructs low-concentration GABA metabolites from truncated, noisy magnetic resonance spectroscopy (MRS) scans.",
    technicalDetails: "Achieved 95% reduction in mean squared error (MSE) and 450% higher signal-to-noise ratio (SNR) over baseline simulated and in-vivo human brain spectra.",
    pdfUrl: "./files/ISVC_2023.pdf",
    externalUrl: "https://link.springer.com/chapter/10.1007/978-3-031-47969-4_2",
    bibtex: `@inproceedings{sagar2023deep,
  title={Deep Learning Based GABA Edited-MRS Signal Reconstruction},
  author={Sagar, Dikshant and Mohammadi, F and Pourhomayoun, M and Joen, J and Amini, N},
  booktitle={International Symposium on Visual Computing (ISVC)},
  pages={15--26},
  year={2023},
  publisher={Springer}
}`
  },
  {
    id: "acm-bcb-2023-finalist",
    title: "Physics-Guided Deep Generative Model for New Ligand Discovery",
    authors: ["Dikshant Sagar", "A. Risheh", "N. Sheikh", "Negin Forouzesh"],
    venue: "14th ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB 2023)",
    year: 2023,
    month: "September",
    category: "highlight",
    type: "conference",
    award: "⭐️ Best Paper Finalist Award ⭐️",
    acceptanceRate: "29.0%",
    summary: "Award-finalist framework combining physical force-field constraints with generative neural networks to synthesize high-affinity small molecule drug candidates.",
    technicalDetails: "Showcased 13.4% superior docking score distributions against tough therapeutic protein targets compared to conventional SMILES-based autoregressive baselines.",
    pdfUrl: "./files/ACM-BCB_2023.pdf",
    externalUrl: "https://dl.acm.org/doi/10.1145/3584371.3613067",
    doi: "10.1145/3584371.3613067",
    bibtex: `@inproceedings{sagar2023physics,
  title={Physics-Guided Deep Generative Model for New Ligand Discovery},
  author={Sagar, Dikshant and Risheh, A and Sheikh, N and Forouzesh, Negin},
  booktitle={14th ACM Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB)},
  year={2023},
  note={Best Paper Finalist Award}
}`
  },
  {
    id: "cibm-2022",
    title: "GCRS: A Hybrid Graph Convolutional Network for Risk Stratification in Multiple Myeloma Cancer Patients",
    authors: ["Dikshant Sagar", "P. Aggarwal", "A. Farswan", "R. Gupta", "A. Gupta"],
    venue: "Computers in Biology and Medicine",
    year: 2022,
    category: "highlight",
    type: "journal",
    impactFactor: "7.7",
    summary: "Pioneering hybrid Graph Convolutional Network model integrating patient cytogenetic features, clinical lab values, and gene expression networks for cancer risk stratification.",
    technicalDetails: "Constructed patient-similarity graph embeddings paired with feature-level graph convolutions, achieving state-of-the-art prognostic stratification in Multiple Myeloma.",
    pdfUrl: "./files/CIBM_2022.pdf",
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/36113255/",
    pmid: "36113255",
    bibtex: `@article{sagar2022gcrs,
  title={GCRS: A hybrid graph convolutional network for risk stratification in multiple myeloma cancer patients},
  author={Sagar, Dikshant and Aggarwal, P and Farswan, A and Gupta, R and Gupta, A},
  journal={Computers in Biology and Medicine},
  volume={149},
  pages={106048},
  year={2022},
  publisher={Elsevier}
}`
  },
  {
    id: "bigmm-2020",
    title: "PAI-BPR: Personalized Outfit Recommendation Scheme with Attribute-Wise Interpretability",
    authors: ["Dikshant Sagar", "J. Garg", "P. Kansal", "S. Bhalla", "R. R. Shah", "Y. Yu"],
    venue: "IEEE Sixth International Conference on Multimedia Big Data (BigMM 2020)",
    year: 2020,
    month: "September",
    category: "all",
    type: "conference",
    acceptanceRate: "19.5%",
    summary: "Deep learning recommendation system learning user taste profiles across multiple visual attributes using Bayesian Personalized Ranking.",
    technicalDetails: "Attained AUC of 0.8502 (+2% over prior state-of-the-art) with decomposed attribute-wise interpretability vectors.",
    pdfUrl: "./files/BigMM_2020.pdf",
    externalUrl: "https://ieeexplore.ieee.org/abstract/document/9232589",
    bibtex: `@inproceedings{sagar2020pai,
  title={PAI-BPR: Personalized outfit recommendation scheme with attribute-wise interpretability},
  author={Sagar, Dikshant and Garg, J and Kansal, P and Bhalla, S and Shah, R R and Yu, Y},
  booktitle={IEEE Sixth International Conference on Multimedia Big Data (BigMM)},
  pages={221--230},
  year={2020}
}`
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "uci-baldi-lab",
    role: "Graduate Research Assistant",
    organization: "Baldi Lab, University of California, Irvine",
    location: "Irvine, CA",
    period: "2024 – Present",
    advisor: "Dr. Pierre Baldi",
    category: "research",
    highlights: ["LLaMA 3.2-11B VLM for Neutrinos (+28% acc)", "Pixel-Space Diffusion for Organelles", "Multi-Agent AI for Fermilab DAQ", "10x RNA-Seq Speedup"],
    bullets: [
      "Developing pixel-space diffusion denoising trajectories for hyperspectral cellular imaging to enable unsupervised organelle segmentation and longitudinal tracking within MDA-MB-231 breast cancer cells.",
      "Architecting a joint vision-language foundation model for neutrino event analysis by extending LLaMA 3.2-11B Vision-Instruct with a multi-scale segmentation head; enabling unified event classification, chain-of-thought explanation, and particle-level semantic mask prediction within a single model (+28% accuracy over baseline).",
      "Designing an end-to-end Multi-Agentic AI framework for NOvA and DUNE DAQ Operations (Fermilab) that autonomously detects, diagnoses, plans, and executes recovery for scientific detector anomalies by combining multimodal anomaly detection, multi-agent RAG, and operational knowledge.",
      "Implementing self-supervised learning methods for FLAME multiphoton skin imaging to learn robust representations for automated differentiation and localization of melanoma and other skin lesions with Grad-CAM interpretability.",
      "Devised a hyperspectral-imaging CNN to identify chemoresistance in MDA-MB-231 cells from phasor unmixed cell images, achieving 94% accuracy/AUROC across 21 organelle-pair ablations to isolate deterministic organelles.",
      "Developed sparsity-invariant frame interpolation for tilt series generation in STEM electron microscopy, improving PSNR by 6.6% and SSIM by 3.3% over baselines.",
      "Implemented scalable deep learning-based signal processing of LArTPC neutrino track segmentation on CPU using MobileU-Net with overlap-tile chunking, cutting memory by 84% and latency by 87%.",
      "Created a deep learning model for multi-slice melanocyte segmentation and PRAME index prediction, reducing PRAME IHC orders by 30%, cutting turnaround by 3.5 min/case, and saving ~$28K/1K cases annually.",
      "Optimized and accelerated RNA-Seq differential analysis pipelines using HISAT, Cufflinks, and CyberT, achieving a 10× performance boost."
    ]
  },
  {
    id: "csula-comb-lab",
    role: "Graduate Research Assistant",
    organization: "Computational Molecular Biology Lab, Cal State LA",
    location: "Los Angeles, CA",
    period: "2023 – 2024",
    advisor: "Dr. Negin Forouzesh",
    category: "research",
    highlights: ["ACM-BCB Best Paper Finalist", "+13.4% Binding Affinity Gain", "Structure-Based Drug Design"],
    bullets: [
      "Built physics-guided deep generative models for conditional de novo structure-based drug discovery, improving average binding affinities by 13.4% over previous state-of-the-art methods.",
      "Won Best Paper Finalist Award at the 14th ACM Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM-BCB 2023).",
      "Integrated molecular electrostatic surface potentials and active learning feedback into generative sampling algorithms."
    ]
  },
  {
    id: "csula-sensing-lab",
    role: "Graduate Research Assistant",
    organization: "Machine Learning and Sensing Lab, Cal State LA",
    location: "Los Angeles, CA",
    period: "2023 – 2024",
    advisor: "Dr. Navid Amini",
    category: "research",
    highlights: ["95% Lower MSE", "450% Higher SNR", "Edited-MRS Reconstruction"],
    bullets: [
      "Proposed a dual-encoder self-attention neural network for GABA Edited-MRS metabolite reconstruction from in-vivo and simulated human brain scans.",
      "Achieved 95% lower mean squared error and 450% higher signal-to-noise ratio compared to standard baseline signal processors, published at ISVC 2023."
    ]
  },
  {
    id: "iiitd-sbi-lab",
    role: "Research Associate",
    organization: "Signal and Biomedical Image Processing (SBI) Lab, IIIT Delhi",
    location: "New Delhi, India",
    period: "2021 – 2022",
    advisor: "Dr. Anubha Gupta",
    category: "research",
    highlights: ["IF 7.7 Journal Paper", "+14% Flow Cytometry Clustering Gain", "GCRS Hybrid GCN"],
    bullets: [
      "Created multi-head self-attention representation learning for unsupervised clustering of high-dimensional single-cell flow cytometry data (MuSARCyto), improving performance by 14% on average across six clinical benchmark datasets.",
      "Developed Hybrid Graph Convolutional Network (GCRS) for multiple myeloma patient risk stratification, published in Computers in Biology and Medicine (Impact Factor: 7.7)."
    ]
  },
  {
    id: "iiitd-midas-lab",
    role: "Undergraduate Researcher",
    organization: "MIDAS Lab, IIIT Delhi",
    location: "New Delhi, India",
    period: "2020",
    advisor: "Dr. Rajiv Ratn Shah",
    category: "research",
    highlights: ["IEEE BigMM Publication", "AUC 0.8502", "Interpretable Recommendation"],
    bullets: [
      "Built deep learning attribute-wise user preference matching using Bayesian Personalized Ranking (PAI-BPR), obtaining an AUC of 0.8502 (+2% gain over previous works), published at IEEE BigMM 2020."
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "cellular-diffusion",
    title: "Pixel-Space Diffusion for Cellular Phenotyping",
    subtitle: "Unsupervised Organelle Tracking & Chemoresistance Mapping in Cancer Cells",
    period: "2024 – 2025",
    tags: ["Diffusion Models", "Computer Vision", "Cancer Biology", "PyTorch Lightning"],
    problem: "Understanding drug resistance mechanisms in aggressive breast cancer requires tracking subtle intracellular morphological shifts across organelles without destructive physical staining.",
    solution: "Formulated pixel-space diffusion denoising trajectories that model natural organelle migration dynamics, combined with a phasor unmixing CNN to quantify organelle-pair determinants of chemoresistance.",
    outcome: "Achieved 94% AUROC in predicting chemoresistance; identified the top deterministic organelle pairs from 21 combinatorial ablations.",
    metrics: ["94% AUROC", "21 Organelle Ablations", "Unsupervised Longitudinal Tracking"]
  },
  {
    id: "physics-drug-gen",
    title: "Physics-Guided De Novo Ligand Discovery",
    subtitle: "Energy-Constrained Generative Networks for High-Affinity Molecular Synthesis",
    period: "2023 – 2025",
    tags: ["Generative AI", "Bioinformatics", "Active Learning", "Drug Discovery"],
    problem: "Unconstrained generative molecular models frequently output molecules that are either synthetically infeasible or exhibit weak binding free energies in target active sites.",
    solution: "Coupled 3D generative molecular graph networks with physical electrostatic surface potentials and active learning Bayesian exploration loops.",
    outcome: "Won Best Paper Award at ACM-BCB CSBW 2025 and Best Paper Finalist at ACM-BCB 2023; improved binding affinities by 13.4% over previous state-of-the-art baselines.",
    metrics: ["⭐️ Best Paper Award ACM-BCB", "+13.4% Binding Affinity", "Physics-Informed Optimization"],
    paperUrl: "./files/ACM-BCB_2023.pdf"
  },
  {
    id: "vlm-neutrino",
    title: "LLaMA-Neutrino: VLM Reasoning for Particle Physics",
    subtitle: "Joint Multimodal Event Classification, Chain-of-Thought Explanation, and Semantic Masking",
    period: "2025 – 2026",
    tags: ["LLaMA 3.2-11B", "PyTorch", "QLoRA", "High-Energy Physics", "Multimodal"],
    problem: "Detectors like LArTPCs yield gigapixel sparse wire-plane signals where classifying rare neutrino interactions requires distinguishing subtle particle topologies and providing physical reasoning rather than opaque predictions.",
    solution: "Adapted LLaMA 3.2-11B Vision-Instruct with specialized token embeddings and a multi-scale segmentation decoder. Supervised with QLoRA to generate both joint text explanations and semantic track masks.",
    outcome: "+28% accuracy boost over deep convolutional baselines; provides human-interpretable natural language rationales validated by high-energy experimental physicists. Published in Nature Communications Physics.",
    metrics: ["+28% Accuracy Gain", "11B Parameters Fine-Tuned", "Nature Communications Physics '26"],
    paperUrl: "https://arxiv.org/abs/2509.08461"
  },
  {
    id: "autonomous-daq-agent",
    title: "Autonomous Multi-Agent AI for Fermilab DAQ Systems",
    subtitle: "Self-Healing Diagnostic & Incident Recovery Orchestration for Particle Detectors",
    period: "2024 – Present",
    tags: ["Multi-Agent AI", "RAG", "Distributed Systems", "Fermilab", "CUDA"],
    problem: "Real-time Data Acquisition (DAQ) pipelines at NOvA and DUNE experience sudden hardware/software sensor drift, buffer overflows, and synchronization faults that halt beam data collection.",
    solution: "Engineered a multi-agent framework combining time-series anomaly detection, hierarchical LLM agents, and multi-agent RAG spanning millions of lines of DAQ logs, detector code, and historical incident runbooks.",
    outcome: "Autonomously detects anomalies in seconds, formulates step-by-step diagnostic hypotheses, and executes safe recovery procedures to prevent experimental downtime.",
    metrics: ["Sub-second Anomaly Detection", "Multi-Agent RAG", "Fermilab Facility Deployment"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "University of California, Irvine",
    location: "Irvine, CA",
    period: "2024 – Present",
    gpa: "4.0 / 4.0",
    advisor: "Dr. Pierre Baldi",
    focus: "Machine Learning, Deep Learning, Foundation Models, AI for Healthcare, Biomedicine, and Physics."
  },
  {
    degree: "M.S. in Computer Science",
    institution: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    period: "2022 – 2024",
    gpa: "4.0 / 4.0",
    thesis: "Deep Reconstruction Model for Exposing Low Concentration Metabolites in Edited-MRS Brain Scans",
    thesisUrl: "https://scholarworks.calstate.edu/concern/theses/k0698h814",
    focus: "Deep Learning, Biomedical Signal Reconstruction, Structural Bioinformatics."
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "Indraprastha Institute of Information Technology, Delhi (IIIT Delhi)",
    location: "New Delhi, India",
    period: "2017 – 2021",
    gpa: "Graduated with Honors",
    thesis: "Multiple Myeloma Cancer Cell Instance Segmentation from Bone Marrow Aspirate Slides",
    thesisUrl: "https://arxiv.org/abs/2110.04275",
    focus: "Machine Learning, Computer Vision, Graph Neural Networks, Recommender Systems."
  }
];

export const AWARDS: Award[] = [
  {
    title: "Best Paper Award",
    issuer: "16th ACM International Conference on Bioinformatics (ACM-BCB / CSBW 2025)",
    year: "2025",
    description: "For 'Physics-Guided Active Learning for New Ligand Discovery'.",
    highlight: true
  },
  {
    title: "Best Paper Finalist Award",
    issuer: "14th ACM Conference on Bioinformatics, Comp. Biology & Health Informatics (ACM-BCB 2023)",
    year: "2023",
    description: "For 'Physics-Guided Deep Generative Model for New Ligand Discovery' (Top 29% acceptance).",
    highlight: true
  },
  {
    title: "Outstanding Graduate Student Award",
    issuer: "California State University, Los Angeles",
    year: "2024",
    description: "Highest academic and research distinction awarded to the graduating Master's cohort.",
    highlight: true
  },
  {
    title: "Outstanding Oral Presentation Award",
    issuer: "CSULA Annual Student Symposium on Research (RSCA 2024)",
    year: "2024",
    description: "Recognized for top research presentation in Science and Engineering."
  },
  {
    title: "Computer Science Department Research Fellowship",
    issuer: "University of California, Irvine",
    year: "2024",
    description: "Merit-based Ph.D. fellowship supporting frontier AI research."
  },
  {
    title: "UCI AGS Travel Grants",
    issuer: "Associated Graduate Students, UC Irvine",
    year: "2025, 2026",
    description: "Competitive travel funding for presenting research at flagship international conferences."
  },
  {
    title: "CSUBIOTECH Faculty-Student Research Collaboration Grant",
    issuer: "California State University Program for Education and Research in Biotechnology",
    year: "2023",
    description: "Funded research on physics-guided molecular generation."
  },
  {
    title: "Cal State LA Graduate Scholarship & Non-Resident Tuition Waiver",
    issuer: "California State University, Los Angeles",
    year: "2023",
    description: "Merit-based institutional scholarships and tuition fellowships."
  },
  {
    title: "Dean's List (2022 & 2023)",
    issuer: "Computer Science Department, CSULA",
    year: "2022 – 2023",
    description: "Consecutive academic honors for maintaining a perfect 4.0 GPA."
  }
];

export const TEACHING_LIST: Teaching[] = [
  {
    role: "Teaching Assistant",
    course: "COMPSCI 274P - Neural Networks and Deep Learning",
    institution: "UC Irvine",
    terms: "Spring 2026"
  },
  {
    role: "Teaching Assistant",
    course: "COMPSCI 172B & 274C - Neural Networks and Deep Learning",
    institution: "UC Irvine",
    terms: "Winter 2026"
  },
  {
    role: "Teaching Assistant",
    course: "COMPSCI 171 - Introduction to Artificial Intelligence",
    institution: "UC Irvine",
    terms: "Winter 2025, Spring 2025"
  },
  {
    role: "Instructor",
    course: "Introduction to Deep Learning & Machine Learning",
    institution: "Cal State LA",
    terms: "Summer 2023, Summer 2024"
  },
  {
    role: "Teaching Assistant",
    course: "CS 4550 - Computer Graphics",
    institution: "Cal State LA",
    terms: "Fall 2023"
  },
  {
    role: "Teaching Assistant",
    course: "CS 4540 - Data Visualization",
    institution: "Cal State LA",
    terms: "Fall 2022"
  }
];

export const REVIEWER_SERVICES: ReviewerService[] = [
  { venue: "Machine Learning and the Physical Sciences Workshop (ML4PS @ NeurIPS)", year: "2025, 2026" },
  { venue: "IEEE Transactions on Computational Biology and Bioinformatics (TCBB)", year: "2026" },
  { venue: "Neural Networks Journal (Elsevier)", year: "2024" }
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages & Core",
    icon: "Code",
    skills: ["Python", "JavaScript / TypeScript", "C/C++", "Java", "SQL", "Bash / Shell"]
  },
  {
    name: "ML / DL Frameworks",
    icon: "Brain",
    skills: ["PyTorch", "HuggingFace Transformers", "WandB", "PyTorch Lightning", "Scikit-Learn", "TensorFlow / Keras", "OpenCV"]
  },
  {
    name: "Generative AI & Methods",
    icon: "Sparkles",
    skills: ["Vision-Language Models (VLMs)", "LLM Fine-Tuning (QLoRA/PEFT)", "Diffusion Denoising Models", "Multi-Agent Systems", "Retrieval-Augmented Generation (RAG)", "Self-Supervised Learning", "Graph Neural Networks (GNNs)", "Efficient Inference"]
  },
  {
    name: "Systems, HPC & Infrastructure",
    icon: "Cpu",
    skills: ["DeepSpeed", "PyTorch Accelerate", "CUDA", "Slurm / HPC Clusters", "Docker", "Git / GitHub Actions", "Linux / POSIX", "AWS", "Google Cloud Platform"]
  },
  {
    name: "Domain & Scientific Computing",
    icon: "Atom",
    skills: ["FLAME Multiphoton & Hyperspectral Microscopy", "Bioinformatics (RNA-seq, Cytometry, Molecular Docking)", "Magnetic Resonance Spectroscopy (Edited-MRS)", "Cryo-EM / STEM Electron Tomography", "Particle Physics Detector Simulation & DAQ (LArTPC)"]
  }
];

export const CERTIFICATIONS = [
  { name: "TensorFlow on Google Cloud", issuer: "Google Cloud" },
  { name: "Google Cloud Big Data and Machine Learning Fundamentals", issuer: "Google Cloud" },
  { name: "Production Machine Learning Systems", issuer: "Google Cloud" },
  { name: "Machine Learning in the Enterprise", issuer: "Google Cloud" },
  { name: "Feature Engineering", issuer: "Google Cloud" },
  { name: "Machine Learning and Reinforcement Learning in Finance", issuer: "NYU" },
  { name: "TensorFlow Developer Professional Certificate", issuer: "DeepLearning.AI" }
];
