import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import type { Content, Staff, Activity, Enquiry } from "../types/database";

export const useContent = () => {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setContent(data);
    }
    setLoading(false);
  };

  const updateContent = async (id: string, updates: Partial<Content>) => {
    const { error } = await supabase
      .from("content")
      .update(updates)
      .eq("id", id);

    if (!error) {
      fetchContent();
    }
    return { error };
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return { content, loading, updateContent, refetch: fetchContent };
};

export const useStaff = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStaff = async () => {
    const { data, error } = await supabase
      .from("staff")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setStaff(data);
    }
    setLoading(false);
  };

  const addStaff = async (newStaff: Omit<Staff, "id" | "created_at">) => {
    const { error } = await supabase.from("staff").insert([newStaff]);

    if (!error) {
      fetchStaff();
    }
    return { error };
  };

  const updateStaff = async (id: string, updates: Partial<Staff>) => {
    const { error } = await supabase.from("staff").update(updates).eq("id", id);

    if (!error) {
      fetchStaff();
    }
    return { error };
  };

  const deleteStaff = async (id: string) => {
    const { error } = await supabase.from("staff").delete().eq("id", id);

    if (!error) {
      fetchStaff();
    }
    return { error };
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return {
    staff,
    loading,
    addStaff,
    updateStaff,
    deleteStaff,
    refetch: fetchStaff,
  };
};

export const useActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setActivities(data);
    }
    setLoading(false);
  };

  const addActivity = async (
    newActivity: Omit<Activity, "id" | "created_at">
  ) => {
    const { error } = await supabase.from("activities").insert([newActivity]);

    if (!error) {
      fetchActivities();
    }
    return { error };
  };

  const updateActivity = async (id: string, updates: Partial<Activity>) => {
    const { error } = await supabase
      .from("activities")
      .update(updates)
      .eq("id", id);

    if (!error) {
      fetchActivities();
    }
    return { error };
  };

  const deleteActivity = async (id: string) => {
    const { error } = await supabase.from("activities").delete().eq("id", id);

    if (!error) {
      fetchActivities();
    }
    return { error };
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    loading,
    addActivity,
    updateActivity,
    deleteActivity,
    refetch: fetchActivities,
  };
};

export const useEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setEnquiries(data);
    }
    setLoading(false);
  };

  const addEnquiry = async (
    newEnquiry: Omit<Enquiry, "id" | "created_at" | "status">
  ) => {
    const { error } = await supabase
      .from("enquiries")
      .insert([{ ...newEnquiry, status: "new" }]);

    if (!error) {
      fetchEnquiries();
    }
    return { error };
  };

  const updateEnquiryStatus = async (id: string, status: Enquiry["status"]) => {
    const { error } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id);

    if (!error) {
      fetchEnquiries();
    }
    return { error };
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return {
    enquiries,
    loading,
    addEnquiry,
    updateEnquiryStatus,
    refetch: fetchEnquiries,
  };
};
