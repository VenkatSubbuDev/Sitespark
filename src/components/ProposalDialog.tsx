import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ProposalForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    budget: "",
    timeline: "",
    requirementType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const to = "dalingsubbu@gmail.com";
    const subject = `Proposal request from ${formData.name || formData.email || "Website"}`;
    const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, `Business: ${formData.business}`, `Requirement Type: ${formData.requirementType}`, `Budget: ${formData.budget}`, `Timeline: ${formData.timeline}`, "", "Message:", formData.message].join("\n");

    // If a Formspree form id is provided via env, POST to Formspree. Otherwise fallback to mailto
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    try {
      if (formId) {
        await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            business: formData.business,
            requirementType: formData.requirementType,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
          }),
        });

        toast({ title: "Request sent", description: "We've received your request and will follow up by email." });
        setStatus({ ok: true, msg: "We've received your request and will follow up by email." });
      } else {
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({ title: "Email prepared", description: "Your email client should open to send the proposal request." });
        setStatus({ ok: true, msg: "Your email client should open to send the proposal request." });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Couldn't send request. Opening email client as fallback." });
      setStatus({ ok: false, msg: "Couldn't send request. Opening email client as fallback." });
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", business: "", budget: "", timeline: "", requirementType: "", message: "" });
      // keep the dialog open briefly so the user can see the animated status message
      setTimeout(() => {
        setStatus(null);
        onClose?.();
      }, 1200);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Name *</label>
          <Input value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required disabled={loading} />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email *</label>
          <Input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required disabled={loading} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Business</label>
        <Input value={formData.business} onChange={(e) => handleInputChange("business", e.target.value)} disabled={loading} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <label className="text-sm font-medium mb-2 block">Requirement Type</label>
          <Select value={formData.requirementType} onValueChange={(v) => handleInputChange("requirementType", v)} disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Select requirement type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website Design</SelectItem>
              <SelectItem value="webapp">Web Application</SelectItem>
              <SelectItem value="ecommerce">E-commerce Store</SelectItem>
              <SelectItem value="redesign">Website Redesign</SelectItem>
              <SelectItem value="care">Care Plan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Budget</label>
          <Input value={formData.budget} onChange={(e) => handleInputChange("budget", e.target.value)} placeholder="Enter budget or ballpark" disabled={loading} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Timeline</label>
        <Select value={formData.timeline} onValueChange={(v) => handleInputChange("timeline", v)} disabled={loading}>
          <SelectTrigger>
            <SelectValue placeholder="When do you need this completed?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-month">Within 1 month</SelectItem>
            <SelectItem value="2-months">Within 2 months</SelectItem>
            <SelectItem value="3-months">Within 3 months</SelectItem>
            <SelectItem value="flexible">I'm flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Business Details *</label>
        <Textarea value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} rows={4} required disabled={loading} />
      </div>

      {status ? (
        <div
          className={`mt-2 p-3 rounded-md ${
            status.ok
              ? 'bg-green-50 text-green-900 animate-toast-success'
              : 'bg-red-50 text-red-900 animate-toast-error'
          }`}
          role="status"
          aria-live="polite"
        >
          {status.msg}
        </div>
      ) : null}

      <div className="flex justify-end items-center space-x-2">
        <DialogClose asChild>
          <Button variant="outline" disabled={loading}>Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : (<><Send className="mr-2 h-4 w-4" /> Send Request</>)}
        </Button>
      </div>
    </form>
  );
};

const ProposalDialog: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* children will be the trigger button passed by caller */}
        {children as any}
      </DialogTrigger>

  <DialogContent className="animate-pop-in premium-glow">
        <DialogHeader>
          <DialogTitle>Get Your Custom Proposal</DialogTitle>
          <DialogDescription>Tell us about your project and we'll send a proposal within 24 hours.</DialogDescription>
        </DialogHeader>

        <ProposalForm onClose={() => setOpen(false)} />

      </DialogContent>
    </Dialog>
  );
};

export default ProposalDialog;
