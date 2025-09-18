import { Briefcase, Package, ShieldCheck, ClipboardCheck } from "lucide-react"; 
// You can swap icons with any you prefer from lucide-react

const steps = [
  {
    title: "We Assist as Your Team Members",
    description: `
    Don’t place volume, just do a trial to build your confidence!
    `,
    icon: Briefcase,
  },
  {
    title: "Assisting on Product Development",
    description: `
    Brief your details from your thinking and development guide, sample feedback will be as you expected. 
    We shall prepare the timeline with the best submission date and COMMITMENT. 
    Sourcing and costing exercise will be done to confirm QUALITY product and best PRICE.
    `,
    icon: Package,
  },
  {
    title: "Procurement and Logistic Support",
    description: `
    Every key person here is capable to set with any system implementation and procurement. 
    Based on all approvals and order confirmation, raw materials sourcing will start, 
    and space will be allocated in related facilities. 
    Regular follow-ups with the approved T&A ensure delivery commitment under smooth and proper execution, 
    avoiding all errors.
    `,
    icon: ClipboardCheck,
  },
  {
    title: "QA Assistant",
    description: `
    QUALITY is our challenge to achieve your standard by maintaining QA manual and procedure. 
    We share comments on size set review, PP Meeting, Pattern and Marker check, Process quality, 
    In-Line report, Pre-Final and Final report with AQL level. 
    After shipment we keep all approval samples, records, and files for 5 years as our business procedure.
    `,
    icon: ShieldCheck,
  },
  {
    title: "Compliance Audit & Evaluation",
    description: `
    We are compliance without any excuse. It’s our regular and common practice to follow-up accordingly 
    and reflect your CODE OF CONDUCT. 
    We are just compiler and executor of your thought.
    `,
    icon: ShieldCheck,
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">How We Work</h2>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            At True Fashion BD, we work hand-in-hand with our clients, 
            providing transparent, reliable, and innovative solutions across every step of the supply chain.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-base-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <step.icon className="w-10 h-10 text-primary" />
                <h3 className="text-lg font-semibold text-base-content">
                  {step.title}
                </h3>
              </div>
              <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
