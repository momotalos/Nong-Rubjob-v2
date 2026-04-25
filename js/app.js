// ============ GEMINI API CONFIG ============
const GEMINI_API_KEY = 'AIzaSyD4k4RPKJb0kSMvVjVa4qc78_KuCpzj718';
const GEMINI_MODEL = 'gemini-3.1-flash-lite-preview';


// ============ i18n TRANSLATIONS ============
const I18N = {
  en: {
    nav_chat: "Chat", nav_data: "Personal Data", nav_hr: "Org Dashboard",
    logout: "Logout",
    eyebrow: "MENTAL WELLNESS PLATFORM",
    hero_title: "Meet <em>N'Rub Job</em><br>Your quiet companion<br>at work",
    hero_lede: "MindHub helps employees manage stress and emotions through private AI conversations — while giving HR organization-level insights without breaking anyone's trust.",
    cta_start: "Get Started", cta_learn: "Learn more",
    hero_bubble: "Hi there! I'm <strong>N'Rub Job</strong>. How are you feeling today?",
    features_title: "Four ways MindHub <em>supports</em> you",
    feature_1_title: "Talk with N'Rub Job",
    feature_1_desc: "A private, judgment-free AI companion trained on clinical assessment frameworks (DSM-5, PHQ-9, GAD-7) to listen, reflect, and gently help you work through stress.",
    feature_2_title: "Privacy by Design",
    feature_2_desc: "Your conversations stay private. HR sees only aggregated clinical indicators — risk scores, symptom severity — never your actual messages.",
    feature_3_title: "Chat History",
    feature_3_desc: "Every conversation is saved securely to your device so you can pick up where you left off. Organize sessions, delete anytime.",
    feature_4_title: "Your Wellness Sanctuary",
    feature_4_desc: "A private garden that grows with every act of self-care. No streaks to break, no points to chase — just quiet evidence that you're taking care of yourself.",
    consent_title: "Before we begin",
    consent_sub: "Please review and agree to the following before using MindHub",
    consent_ai_title: "This is an AI, not a clinician",
    consent_ai_desc: "N'Rub Job is an AI companion trained on clinical assessment frameworks (DSM-5, PHQ-9, GAD-7, Perceived Stress Scale). It is <strong>not</strong> a licensed therapist or psychiatrist and cannot diagnose, prescribe medication, or replace professional care. For acute crises, it will direct you to emergency services (1323, 1669, Samaritans 02-713-6793).",
    consent_data_title: "What we collect from your conversations",
    consent_data_desc: "Our AI analyzes your messages to derive clinical-style indicators (anonymized aggregates only):",
    consent_data_item_1: "<strong>Risk level</strong> (1–3) based on symptom patterns",
    consent_data_item_2: "<strong>Primary emotion &amp; intensity</strong> (stress, anxiety, burnout, etc.)",
    consent_data_item_3: "<strong>Clinical screening scores</strong> (mood, anxiety, stress, sleep, energy)",
    consent_data_item_4: "<strong>Topic themes</strong> (workload, management, relationships — no specifics)",
    consent_data_item_5: "<strong>Assessment phase</strong> (which clinical step we're in)",
    consent_company_title: "How your company uses this data",
    consent_company_desc: "Your employer sees <strong>only aggregated, anonymized</strong> organizational trends — never your raw messages or individual identity. Data is used to:",
    consent_company_item_1: "Identify organizational stress patterns (e.g., team-level burnout)",
    consent_company_item_2: "Inform workplace wellness policies and interventions",
    consent_company_item_3: "Connect you with EAP/professional support when risk is elevated",
    consent_rights_title: "Your rights (PDPA/GDPR)",
    consent_rights_desc: "You may access, export, or delete all your data at any time from your account. You can withdraw consent and close your account at any point without affecting your employment. Chat history is stored locally on your device and encrypted at rest.",
    consent_crisis: "<strong>⚠ In crisis?</strong> If you are in immediate danger, please call emergency services (1669) or Thailand Mental Health Hotline <strong>1323</strong> directly — do not rely on AI alone.",
    consent_chk_1_title: "I understand this is an AI and not a substitute for professional care",
    consent_chk_1_desc: "I will seek professional help for serious mental health concerns.",
    consent_chk_2_title: "I consent to clinical-style data collection from my conversations",
    consent_chk_2_desc: "Anonymized aggregates only — no raw messages leave my device.",
    consent_chk_3_title: "I consent to my company accessing anonymized organizational insights",
    consent_chk_3_desc: "For wellness planning and support — never my individual messages.",
    consent_cancel: "Cancel", consent_agree: "Agree & Continue",
    login_title: "Welcome back", login_sub: "Sign in to continue your wellness journey",
    login_error: "Invalid email or password",
    login_email: "Email", login_password: "Password", login_submit: "Sign In",
    login_test_title: "🧪 Test credentials", login_test_emp: "Employee:", login_test_hr: "HR:",
    side_chat: "Talk with N'Rub Job", side_data: "Personal Data",
    sessions_title: "Sessions", new_chat: "New",
    chat_online: "Online · usually replies instantly",
    send: "Send",
    data_title: "Your Personal Data", data_sub: "A private clinical-style overview · only you can see this",
    stat_mh_score: "Mental Health Score",
    stat_phq9: "PHQ-9 (Depression)", stat_gad7: "GAD-7 (Anxiety)",
    stat_sessions_month: "Sessions this month",
    from_last_week: "from last week", from_last_month: "from last month",
    mild: "Mild", moderate: "Moderate", high: "High Stress",
    chart_title: "Mood & Stress — Last 14 Days",
    chart_sub: "Blue = mood (higher is better) · Red = stress (lower is better)",
    clinical_screening: "Clinical Screening",
    clinical_screening_sub: "DSM-5 aligned · self-reported",
    mood_label: "Mood", stress_label: "Stress", sleep_label: "Sleep Quality", energy_label: "Energy",
    mood_fair: "Fair", stress_high: "High", sleep_poor: "Poor", energy_low: "Low",
    your_topics: "Your Top Topics", your_topics_sub: "What you've been talking about",
    topic_workload: "Workload", topic_sleep: "Sleep", topic_manager: "Manager",
    topic_worklife: "Work-life", topic_energy: "Energy", topic_burnout: "Burnout",
    topic_career: "Career", topic_coworker: "Coworker", topic_financial: "Financial",
    insights_title: "Insights & Suggestions",
    insights_sub: "Patterns N'Rub Job noticed (private to you)",
    insight_1_title: "Sleep pattern detected",
    insight_1_desc: "Your mood scores dip significantly on days after poor sleep. Wind-down routines may help.",
    insight_2_title: "Monday stress spike",
    insight_2_desc: "Stress levels run 40% higher on Mondays. Friday planning might ease the transition.",
    insight_3_title: "You're resilient",
    insight_3_desc: "Despite high stress, you've been consistently checking in. That self-awareness is a strength.",
    hr_title: "Organizational Mental Health <em>Intelligence</em>",
    hr_sub: "Clinical-grade insights · anonymized aggregate data · PDPA compliant",
    hr_updated: "Last refreshed", hr_date: "April 22, 2026 · 14:32",
    filter_all_depts: "All departments", filter_14_days: "Last 14 days",
    filter_7_days: "Last 7 days", filter_30_days: "Last 30 days",
    filter_all_risk: "All risk levels", filter_high_only: "High risk only", filter_med_plus: "Medium+",
    filter_all_senior: "All seniority",
    kpi_org_score: "Org Health Score", improving: "(improving)",
    kpi_high_risk: "High-risk Employees",
    kpi_predicted_burnout: "Predicted Burnout (1-3mo)",
    kpi_active_users: "Active Users", kpi_resign_risk: "Resignation Risk",
    clinical_summary_title: "Clinical Assessment Summary",
    clinical_summary_sub: "Aggregated from N'Rub Job's 7-step clinical framework · based on DSM-5, PHQ-9, GAD-7, PSS",
    mean_phq9: "Avg PHQ-9", mean_gad7: "Avg GAD-7", mean_pss: "Avg PSS",
    crisis_flags: "Crisis Flags (30d)", escalated: "All Escalated",
    assessment_phase_dist: "Assessment Phase Distribution",
    assessment_phase_sub: "Where employees are in clinical flow",
    phase_1: "1. Rapport", phase_2: "2. Intake", phase_3: "3. Screening",
    phase_4: "4. MSE", phase_5: "5. Integration",
    phase_6: "6. Formulation", phase_7: "7. Support",
    chart_sessions: "Daily Sessions · by risk classification",
    days_stacked: "days · stacked",
    risk_low: "Low risk", risk_med: "Medium risk", risk_high: "High risk",
    priority_alerts: "Priority Alerts", priority_alerts_sub: "Ranked by urgency",
    alert_1_desc: "Crisis flag · PHQ-9: 22/27 · references to self-harm · hotline 1323 shared · EAP notified",
    alert_2_desc: "GAD-7: 15/21 · sustained medium risk · 5 sessions · topics: manager, workload",
    alert_3_desc: "Team PSS ↑ 42% this week · burnout cluster forming · consider workshop",
    alert_4_desc: "Burnout indicators ↑ 40% · disengagement signals · sleep quality decline",
    action_contact_eap: "Notify EAP", action_details: "Details",
    action_counselor: "Recommend counselor", action_view_team: "View team",
    action_checkin: "Schedule check-in", yesterday: "yesterday",
    heatmap_title: "Team Health Heatmap",
    heatmap_sub: "14 days · green = low risk · red = high risk",
    rca_title: "Root Cause Analysis",
    rca_sub: "AI-generated actionable insights for C-level decisions",
    rca_1_title: "Meeting overload · Engineering",
    rca_1_desc: "Avg 6.2 meetings/day vs org avg 3.8 · correlates with 34% higher GAD-7 scores in team",
    rca_1_action: "Suggest: No-meeting Wednesday",
    rca_2_title: "Quarter-end pressure · Sales",
    rca_2_desc: "Burnout signals peak in final 2 weeks of Q · 3 high-risk cases cluster here · PSS ↑ 28%",
    rca_2_action: "Suggest: workload rebalancing",
    rca_3_title: "Poor sleep · Operations night shift",
    rca_3_desc: "Sleep-quality scores ↓ 52% vs day shift · linked to rotation policy · review recommended",
    rca_3_action: "Review shift policy",
    stress_drivers: "Top Stress Drivers", days_orgwide: "days org-wide",
    emotion_dist: "Emotional Distribution", last_7_days: "Last 7 days",
    emotion_stress: "Stress", emotion_burnout: "Burnout", emotion_anxiety: "Anxiety",
    emotion_sadness: "Sadness", emotion_positive: "Positive",
    high_priority_emp: "High-Priority Employees",
    high_priority_sub: "Ranked by urgency · anonymized",
    col_mh_score: "MH Score", col_trend: "Trend",
    footer_powered: "Powered by Claude / Gemini · N'Rub Job listens first, advises second",
    mascot_tooltip: "Click to talk with me 💙",
    phase_label_1: "PHASE 1 · RAPPORT", phase_label_2: "PHASE 2 · INTAKE",
    phase_label_3: "PHASE 3 · SCREENING", phase_label_4: "PHASE 4 · MSE",
    phase_label_5: "PHASE 5 · INTEGRATION", phase_label_6: "PHASE 6 · FORMULATION",
    phase_label_7: "PHASE 7 · SUPPORT",
    greeting_initial: "Hi there! I'm N'Rub Job 💙\n\nI'm here as a quiet companion — whether you want to talk something through, vent, or just check in. No judgment, no pressure.\n\nHow are you feeling today?",
    chip_drained: "Drained from meetings", chip_burnout: "Feeling burned out",
    chip_pressure: "Manager pressure", chip_sleep: "Can't sleep",
    session_untitled: "New conversation",
    empty_sessions: "No conversations yet.\nStart chatting to save your first one.",
    confirm_delete: "Delete this conversation?",
    side_sanctuary: "Your Sanctuary",
    sanctuary_title: "Your Sanctuary",
    sanctuary_sub: "A private space that grows with you · nothing is ever lost here",
    garden_title: "Your Wellness Garden",
    garden_sub: "Every act of self-care grows a plant. No failure states. No streaks to break.",
    garden_empty: "Your garden is waiting.<br>Chat with N'Rub Job or try a breathing exercise to plant your first seed.",
    plants: "plants", days_visited: "days visited", rare_blooms: "rare blooms",
    try_breathing: "Try a 1-minute breathing exercise",
    milestones_title: "Moonlight Milestones", milestones_sub: "Markers of depth, not frequency",
    vault_title: "Reflection Vault", vault_sub: "Insights N'Rub Job captured from your conversations",
    vault_empty: "No reflections yet. Start a conversation and insights will appear here.",
    m_new_moon_t: "New Moon", m_new_moon_d: "Your first conversation",
    m_first_light_t: "First Light", m_first_light_d: "Named 5 different feelings",
    m_half_moon_t: "Half Moon", m_half_moon_d: "Completed a breathing exercise",
    m_waxing_t: "Waxing Moon", m_waxing_d: "Noticed a pattern in yourself",
    m_full_moon_t: "Full Moon", m_full_moon_d: "30 days of showing up",
    m_aurora_t: "Aurora", m_aurora_d: "Reached deep reflection phase",
    breathe_ready: "Ready", breathe_inhale: "Breathe in…",
    breathe_exhale: "Breathe out…", breathe_hold: "Hold…",
    breathe_close: "Close", breathe_done: "Well done 💙",
    toast_grew: "Your garden grew",
    toast_plant: "A new plant appeared",
    toast_breathing: "Plant grown from breathing",
    toast_reflection: "Plant grown from reflection",
    toast_milestone: "New milestone unlocked"
  },
  th: {
    nav_chat: "คุยกับน้องรับจบ", nav_data: "ข้อมูลส่วนตัว", nav_hr: "แดชบอร์ดองค์กร",
    logout: "ออกจากระบบ",
    eyebrow: "แพลตฟอร์มดูแลสุขภาพจิตในที่ทำงาน",
    hero_title: "พบกับ <em>น้องรับจบ</em><br>เพื่อนเงียบๆ<br>ในที่ทำงานของคุณ",
    hero_lede: "MindHub ช่วยให้พนักงานจัดการกับความเครียดและอารมณ์ผ่านการพูดคุยกับ AI แบบส่วนตัว พร้อมให้ข้อมูลเชิงลึกระดับองค์กรแก่ HR โดยไม่ละเมิดความไว้วางใจของใคร",
    cta_start: "เริ่มต้นใช้งาน", cta_learn: "ดูเพิ่มเติม",
    hero_bubble: "สวัสดีครับ! ผม<strong>น้องรับจบ</strong> วันนี้พี่รู้สึกยังไงบ้างครับ?",
    features_title: "4 วิธีที่ MindHub <em>ช่วยดูแล</em>คุณ",
    feature_1_title: "คุยกับน้องรับจบ",
    feature_1_desc: "AI คู่คิดส่วนตัวที่ไม่ตัดสิน ได้รับการฝึกฝนตามมาตรฐานการประเมินทางคลินิก (DSM-5, PHQ-9, GAD-7) พร้อมรับฟัง สะท้อน และช่วยจัดการความเครียดอย่างอ่อนโยน",
    feature_2_title: "ออกแบบเพื่อความเป็นส่วนตัว",
    feature_2_desc: "บทสนทนาของคุณเป็นส่วนตัว HR เห็นเพียงตัวชี้วัดเชิงคลินิกแบบรวม เช่น คะแนนความเสี่ยง ระดับอาการ ไม่เห็นข้อความจริงของคุณ",
    feature_3_title: "บันทึกประวัติการสนทนา",
    feature_3_desc: "ทุกการสนทนาถูกบันทึกไว้ในอุปกรณ์ของคุณอย่างปลอดภัย เพื่อให้คุณกลับมาคุยต่อได้ จัดระเบียบเซสชัน ลบได้ตลอด",
    feature_4_title: "สวนแห่งใจส่วนตัว",
    feature_4_desc: "สวนส่วนตัวที่เติบโตขึ้นทุกครั้งที่คุณดูแลตัวเอง ไม่มี streak ไม่มีคะแนนให้ไล่ล่า มีแต่หลักฐานเงียบๆ ว่าคุณกำลังดูแลใจตัวเอง",
    consent_title: "ก่อนเริ่มต้น",
    consent_sub: "กรุณาอ่านและยอมรับเงื่อนไขต่อไปนี้ก่อนใช้ MindHub",
    consent_ai_title: "นี่คือ AI ไม่ใช่แพทย์หรือนักจิตวิทยา",
    consent_ai_desc: "น้องรับจบคือ AI ที่ได้รับการฝึกฝนตามมาตรฐานการประเมินทางคลินิก (DSM-5, PHQ-9, GAD-7, Perceived Stress Scale) <strong>ไม่ใช่</strong>นักจิตบำบัดหรือจิตแพทย์ที่มีใบอนุญาต และไม่สามารถวินิจฉัย จ่ายยา หรือทดแทนการดูแลจากผู้เชี่ยวชาญได้ กรณีวิกฤต ระบบจะแนะนำให้ติดต่อสายด่วน (1323, 1669, Samaritans 02-713-6793)",
    consent_data_title: "เราเก็บข้อมูลอะไรจากบทสนทนาของคุณ",
    consent_data_desc: "AI จะวิเคราะห์ข้อความของคุณเพื่อสร้างตัวชี้วัดเชิงคลินิก (เฉพาะข้อมูลรวมที่ไม่ระบุตัวตน):",
    consent_data_item_1: "<strong>ระดับความเสี่ยง</strong> (1–3) จากรูปแบบอาการ",
    consent_data_item_2: "<strong>อารมณ์หลัก &amp; ความรุนแรง</strong> (เครียด วิตกกังวล หมดไฟ ฯลฯ)",
    consent_data_item_3: "<strong>คะแนนการคัดกรองทางคลินิก</strong> (อารมณ์ วิตกกังวล ความเครียด การนอน พลังงาน)",
    consent_data_item_4: "<strong>หัวข้อที่พูดถึง</strong> (งาน หัวหน้า ความสัมพันธ์ ไม่มีรายละเอียด)",
    consent_data_item_5: "<strong>ขั้นตอนการประเมิน</strong> (อยู่ในขั้นคลินิกใด)",
    consent_company_title: "บริษัทของคุณใช้ข้อมูลนี้อย่างไร",
    consent_company_desc: "นายจ้างของคุณจะเห็น<strong>เฉพาะข้อมูลรวมที่ไม่ระบุตัวตน</strong>ในระดับองค์กร ไม่เห็นข้อความหรือตัวตนของคุณ ข้อมูลใช้เพื่อ:",
    consent_company_item_1: "ระบุรูปแบบความเครียดในองค์กร (เช่น ภาวะหมดไฟระดับทีม)",
    consent_company_item_2: "ใช้ประกอบนโยบายและมาตรการดูแลพนักงาน",
    consent_company_item_3: "เชื่อมต่อคุณกับ EAP/ผู้เชี่ยวชาญเมื่อความเสี่ยงสูงขึ้น",
    consent_rights_title: "สิทธิของคุณ (PDPA/GDPR)",
    consent_rights_desc: "คุณสามารถเข้าถึง ส่งออก หรือลบข้อมูลของคุณได้ตลอดเวลา สามารถถอนความยินยอมและปิดบัญชีได้โดยไม่กระทบการจ้างงาน ประวัติการสนทนาถูกเก็บไว้ในอุปกรณ์ของคุณและเข้ารหัสไว้",
    consent_crisis: "<strong>⚠ อยู่ในภาวะวิกฤต?</strong> หากคุณกำลังตกอยู่ในอันตรายเฉพาะหน้า กรุณาโทร 1669 (เหตุฉุกเฉิน) หรือสายด่วนสุขภาพจิต <strong>1323</strong> โดยตรง อย่าพึ่ง AI เพียงอย่างเดียว",
    consent_chk_1_title: "ฉันเข้าใจว่านี่คือ AI และไม่ได้ทดแทนการดูแลจากผู้เชี่ยวชาญ",
    consent_chk_1_desc: "ฉันจะปรึกษาผู้เชี่ยวชาญหากมีปัญหาสุขภาพจิตที่รุนแรง",
    consent_chk_2_title: "ฉันยินยอมให้เก็บข้อมูลเชิงคลินิกจากบทสนทนาของฉัน",
    consent_chk_2_desc: "เฉพาะข้อมูลรวมที่ไม่ระบุตัวตน ข้อความจริงไม่ออกจากอุปกรณ์",
    consent_chk_3_title: "ฉันยินยอมให้บริษัทเข้าถึงข้อมูลเชิงรวมในระดับองค์กร",
    consent_chk_3_desc: "เพื่อการวางแผนดูแลพนักงาน ไม่ใช่ข้อความส่วนตัวของฉัน",
    consent_cancel: "ยกเลิก", consent_agree: "ยอมรับและดำเนินการต่อ",
    login_title: "ยินดีต้อนรับกลับ", login_sub: "เข้าสู่ระบบเพื่อเริ่มดูแลสุขภาพจิตของคุณ",
    login_error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    login_email: "อีเมล", login_password: "รหัสผ่าน", login_submit: "เข้าสู่ระบบ",
    login_test_title: "🧪 ข้อมูลทดสอบ", login_test_emp: "พนักงาน:", login_test_hr: "HR:",
    side_chat: "คุยกับน้องรับจบ", side_data: "ข้อมูลส่วนตัว",
    sessions_title: "การสนทนา", new_chat: "ใหม่",
    chat_online: "ออนไลน์ · ตอบกลับทันที",
    send: "ส่ง",
    data_title: "ข้อมูลส่วนตัวของคุณ", data_sub: "ภาพรวมเชิงคลินิกแบบส่วนตัว เห็นได้เฉพาะคุณ",
    stat_mh_score: "คะแนนสุขภาพจิต",
    stat_phq9: "PHQ-9 (ภาวะซึมเศร้า)", stat_gad7: "GAD-7 (ความวิตกกังวล)",
    stat_sessions_month: "จำนวนครั้งเดือนนี้",
    from_last_week: "จากสัปดาห์ก่อน", from_last_month: "จากเดือนก่อน",
    mild: "อ่อน", moderate: "ปานกลาง", high: "สูงมาก",
    chart_title: "อารมณ์ & ความเครียด — 14 วันที่ผ่านมา",
    chart_sub: "น้ำเงิน = อารมณ์ (สูงยิ่งดี) · แดง = ความเครียด (ต่ำยิ่งดี)",
    clinical_screening: "การคัดกรองทางคลินิก",
    clinical_screening_sub: "สอดคล้องกับ DSM-5 · รายงานโดยตัวเอง",
    mood_label: "อารมณ์", stress_label: "ความเครียด", sleep_label: "คุณภาพการนอน", energy_label: "พลังงาน",
    mood_fair: "พอใช้", stress_high: "สูง", sleep_poor: "แย่", energy_low: "ต่ำ",
    your_topics: "หัวข้อที่คุณพูดบ่อย", your_topics_sub: "สิ่งที่คุณคุยกับน้องรับจบ",
    topic_workload: "ปริมาณงาน", topic_sleep: "การนอน", topic_manager: "หัวหน้า",
    topic_worklife: "Work-life", topic_energy: "พลังงาน", topic_burnout: "หมดไฟ",
    topic_career: "อาชีพ", topic_coworker: "เพื่อนร่วมงาน", topic_financial: "การเงิน",
    insights_title: "ข้อสังเกต & คำแนะนำ",
    insights_sub: "รูปแบบที่น้องรับจบสังเกตเห็น (เฉพาะคุณเท่านั้น)",
    insight_1_title: "รูปแบบการนอนที่ตรวจพบ",
    insight_1_desc: "คะแนนอารมณ์ของคุณลดลงอย่างชัดเจนในวันหลังนอนไม่พอ การปรับกิจวัตรก่อนนอนอาจช่วยได้",
    insight_2_title: "ความเครียดพุ่งสูงวันจันทร์",
    insight_2_desc: "ระดับความเครียดสูงกว่าค่าเฉลี่ย 40% ในวันจันทร์ การวางแผนล่วงหน้าวันศุกร์อาจช่วยได้",
    insight_3_title: "คุณมีความยืดหยุ่นทางใจ",
    insight_3_desc: "แม้จะเครียดสูง คุณยังเข้ามาเช็คอินอย่างสม่ำเสมอ การตระหนักรู้ตัวเองคือจุดแข็ง",
    hr_title: "ข้อมูลเชิงลึกสุขภาพจิต<em>ระดับองค์กร</em>",
    hr_sub: "ข้อมูลเชิงคลินิก · ข้อมูลรวมที่ไม่ระบุตัวตน · สอดคล้องกับ PDPA",
    hr_updated: "อัปเดตล่าสุด", hr_date: "22 เมษายน 2569 · 14:32",
    filter_all_depts: "ทุกแผนก", filter_14_days: "14 วันที่ผ่านมา",
    filter_7_days: "7 วันที่ผ่านมา", filter_30_days: "30 วันที่ผ่านมา",
    filter_all_risk: "ทุกระดับความเสี่ยง", filter_high_only: "เสี่ยงสูงเท่านั้น", filter_med_plus: "ปานกลางขึ้นไป",
    filter_all_senior: "ทุกระดับอาวุโส",
    kpi_org_score: "คะแนนสุขภาพองค์กร", improving: "(ดีขึ้น)",
    kpi_high_risk: "พนักงานเสี่ยงสูง",
    kpi_predicted_burnout: "คาดการณ์หมดไฟ (1-3 เดือน)",
    kpi_active_users: "ผู้ใช้งาน", kpi_resign_risk: "เสี่ยงลาออก",
    clinical_summary_title: "สรุปการประเมินทางคลินิก",
    clinical_summary_sub: "รวบรวมจากกระบวนการประเมิน 7 ขั้นของน้องรับจบ อิงตาม DSM-5, PHQ-9, GAD-7, PSS",
    mean_phq9: "PHQ-9 เฉลี่ย", mean_gad7: "GAD-7 เฉลี่ย", mean_pss: "PSS เฉลี่ย",
    crisis_flags: "สัญญาณวิกฤต (30 วัน)", escalated: "ส่งต่อผู้เชี่ยวชาญแล้ว",
    assessment_phase_dist: "การกระจายตามขั้นประเมิน",
    assessment_phase_sub: "พนักงานอยู่ในขั้นคลินิกใดบ้าง",
    phase_1: "1. สร้างความสัมพันธ์", phase_2: "2. รับข้อมูลเบื้องต้น",
    phase_3: "3. คัดกรอง", phase_4: "4. ตรวจสถานะจิตใจ (MSE)",
    phase_5: "5. บูรณาการข้อมูล", phase_6: "6. สรุปผล", phase_7: "7. ให้การสนับสนุน",
    chart_sessions: "จำนวนเซสชันรายวัน · แยกตามระดับความเสี่ยง",
    days_stacked: "วัน · แบบซ้อน",
    risk_low: "เสี่ยงต่ำ", risk_med: "เสี่ยงปานกลาง", risk_high: "เสี่ยงสูง",
    priority_alerts: "แจ้งเตือนเร่งด่วน", priority_alerts_sub: "เรียงตามความเร่งด่วน",
    alert_1_desc: "สัญญาณวิกฤต · PHQ-9: 22/27 · กล่าวถึงการทำร้ายตัวเอง · ส่งสายด่วน 1323 · แจ้ง EAP แล้ว",
    alert_2_desc: "GAD-7: 15/21 · เสี่ยงปานกลางต่อเนื่อง · 5 ครั้ง · เรื่อง: หัวหน้า, ปริมาณงาน",
    alert_3_desc: "PSS ของทีม ↑ 42% สัปดาห์นี้ · กำลังก่อตัวเป็นกลุ่มหมดไฟ · พิจารณาจัด workshop",
    alert_4_desc: "สัญญาณหมดไฟ ↑ 40% · สัญญาณห่างเหินงาน · คุณภาพการนอนลดลง",
    action_contact_eap: "แจ้ง EAP", action_details: "รายละเอียด",
    action_counselor: "แนะนำนักจิตวิทยา", action_view_team: "ดูทีม",
    action_checkin: "นัดพบพนักงาน", yesterday: "เมื่อวาน",
    heatmap_title: "แผนที่สุขภาพทีม",
    heatmap_sub: "14 วัน · เขียว = เสี่ยงต่ำ · แดง = เสี่ยงสูง",
    rca_title: "วิเคราะห์สาเหตุหลัก",
    rca_sub: "ข้อมูลเชิงปฏิบัติจาก AI สำหรับการตัดสินใจระดับผู้บริหาร",
    rca_1_title: "ประชุมมากเกินไป · ทีม Engineering",
    rca_1_desc: "เฉลี่ย 6.2 ประชุม/วัน เทียบค่าเฉลี่ย 3.8 · สัมพันธ์กับคะแนน GAD-7 สูงกว่าทีมอื่น 34%",
    rca_1_action: "แนะนำ: วันพุธไม่มีประชุม",
    rca_2_title: "กดดันสิ้นไตรมาส · ทีม Sales",
    rca_2_desc: "สัญญาณหมดไฟพุ่งสูง 2 สัปดาห์สุดท้ายของไตรมาส · 3 รายเสี่ยงสูงกระจุกอยู่ที่นี่ · PSS ↑ 28%",
    rca_2_action: "แนะนำ: ปรับสมดุลปริมาณงาน",
    rca_3_title: "นอนไม่ดี · ทีมกะดึก Operations",
    rca_3_desc: "คะแนนคุณภาพการนอน ↓ 52% เทียบกะกลางวัน · เชื่อมโยงกับนโยบายสลับกะ · ควรทบทวน",
    rca_3_action: "ทบทวนนโยบายการสลับกะ",
    stress_drivers: "สาเหตุความเครียดหลัก", days_orgwide: "วัน · ทั้งองค์กร",
    emotion_dist: "การกระจายของอารมณ์", last_7_days: "7 วันที่ผ่านมา",
    emotion_stress: "เครียด", emotion_burnout: "หมดไฟ", emotion_anxiety: "วิตกกังวล",
    emotion_sadness: "เศร้า", emotion_positive: "บวก",
    high_priority_emp: "พนักงานที่ต้องดูแลเร่งด่วน",
    high_priority_sub: "เรียงตามความเร่งด่วน · ไม่ระบุตัวตน",
    col_mh_score: "คะแนนสุขภาพจิต", col_trend: "แนวโน้ม",
    footer_powered: "ขับเคลื่อนโดย Claude / Gemini · น้องรับจบรับฟังก่อน แนะนำทีหลัง",
    mascot_tooltip: "แตะเพื่อคุยกันนะครับ 💙",
    phase_label_1: "ขั้น 1 · สร้างความสัมพันธ์", phase_label_2: "ขั้น 2 · รับข้อมูล",
    phase_label_3: "ขั้น 3 · คัดกรอง", phase_label_4: "ขั้น 4 · ตรวจสภาพจิต",
    phase_label_5: "ขั้น 5 · บูรณาการ", phase_label_6: "ขั้น 6 · สรุปผล",
    phase_label_7: "ขั้น 7 · สนับสนุน",
    greeting_initial: "สวัสดีครับ! ผมน้องรับจบ 💙\n\nผมอยู่ตรงนี้ในฐานะเพื่อนเงียบๆ ของพี่ครับ ไม่ว่าพี่อยากจะเล่า ระบาย หรือแค่มาเช็คอิน ผมไม่ตัดสินและไม่กดดัน\n\nวันนี้พี่รู้สึกยังไงบ้างครับ?",
    chip_drained: "หมดพลังจากการประชุม", chip_burnout: "รู้สึกหมดไฟ",
    chip_pressure: "หัวหน้ากดดัน", chip_sleep: "นอนไม่หลับ",
    session_untitled: "การสนทนาใหม่",
    empty_sessions: "ยังไม่มีบทสนทนา\nเริ่มคุยเพื่อบันทึกครั้งแรก",
    confirm_delete: "ลบบทสนทนานี้?",
    side_sanctuary: "สวนของคุณ",
    sanctuary_title: "สวนส่วนตัวของคุณ",
    sanctuary_sub: "พื้นที่ส่วนตัวที่เติบโตไปพร้อมกับคุณ · ไม่มีอะไรสูญหายที่นี่",
    garden_title: "สวนแห่งใจของคุณ",
    garden_sub: "ทุกการดูแลตัวเองปลูกต้นไม้ 1 ต้น ไม่มี streak ไม่มีภาวะล้มเหลว",
    garden_empty: "สวนของคุณกำลังรอ<br>คุยกับน้องรับจบ หรือลองฝึกหายใจ เพื่อปลูกเมล็ดแรก",
    plants: "ต้น", days_visited: "วันที่มา", rare_blooms: "ดอกไม้หายาก",
    try_breathing: "ลองฝึกหายใจ 1 นาที",
    milestones_title: "เหตุการณ์สำคัญแสงจันทร์", milestones_sub: "สัญลักษณ์แห่งความลึก ไม่ใช่ความถี่",
    vault_title: "ห้องเก็บบทสะท้อนใจ", vault_sub: "ข้อคิดที่น้องรับจบจับได้จากบทสนทนาของคุณ",
    vault_empty: "ยังไม่มีบทสะท้อน เริ่มสนทนาแล้วข้อคิดจะปรากฏที่นี่",
    m_new_moon_t: "จันทร์ดับ", m_new_moon_d: "บทสนทนาแรกของคุณ",
    m_first_light_t: "แสงแรก", m_first_light_d: "บอกความรู้สึกได้ 5 แบบ",
    m_half_moon_t: "จันทร์ครึ่งดวง", m_half_moon_d: "ฝึกหายใจจบ 1 ครั้ง",
    m_waxing_t: "จันทร์ข้างขึ้น", m_waxing_d: "สังเกตรูปแบบของตัวเอง",
    m_full_moon_t: "จันทร์เต็มดวง", m_full_moon_d: "มาเยี่ยม 30 วัน",
    m_aurora_t: "แสงเหนือ", m_aurora_d: "เข้าถึงขั้นสะท้อนใจลึก",
    breathe_ready: "พร้อม", breathe_inhale: "หายใจเข้า…",
    breathe_exhale: "หายใจออก…", breathe_hold: "กลั้นไว้…",
    breathe_close: "ปิด", breathe_done: "เก่งมากครับ 💙",
    toast_grew: "สวนของคุณเติบโตขึ้น",
    toast_plant: "ต้นไม้ใหม่ปรากฏแล้ว",
    toast_breathing: "ต้นไม้งอกจากการฝึกหายใจ",
    toast_reflection: "ต้นไม้งอกจากการสะท้อนใจ",
    toast_milestone: "ปลดล็อก milestone ใหม่"
  }
};

// ============ LANGUAGE SWITCHING ============
let currentLang = localStorage.getItem('mindhub_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('mindhub_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });
  // Update placeholders & chips
  updateChipsI18n();
  updateInputPlaceholder();
  renderSessionList();
  updatePhaseTag();
}

function updateInputPlaceholder() {
  const inp = document.getElementById('input');
  if (inp) inp.placeholder = currentLang === 'th' ? 'แบ่งปันสิ่งที่อยู่ในใจ...' : "Share what's on your mind...";
}

function updateChipsI18n() {
  const chipsEl = document.getElementById('quick-chips');
  if (!chipsEl) return;
  const t = I18N[currentLang];
  chipsEl.innerHTML = `
    <button class="chip" data-chip="drained">${t.chip_drained}</button>
    <button class="chip" data-chip="burnout">${t.chip_burnout}</button>
    <button class="chip" data-chip="pressure">${t.chip_pressure}</button>
    <button class="chip" data-chip="sleep">${t.chip_sleep}</button>
  `;
  chipsEl.querySelectorAll('.chip').forEach(c => {
    c.addEventListener('click', () => {
      const texts = {
        drained: { en: "I had back-to-back meetings today and I'm drained", th: "วันนี้ประชุมติดกันทั้งวันเลย หมดพลังมาก" },
        burnout: { en: "I feel burned out lately", th: "ช่วงนี้รู้สึกหมดไฟ" },
        pressure: { en: "My manager is putting too much pressure on me", th: "หัวหน้ากดดันฉันเยอะมาก" },
        sleep: { en: "I can't sleep well these days", th: "ช่วงนี้นอนไม่ค่อยหลับ" }
      };
      const key = c.dataset.chip;
      const text = texts[key][currentLang];
      document.getElementById('input').value = text;
      sendMessage();
    });
  });
}

// ============ CLINICAL SYSTEM PROMPT (7-phase framework) ============
const SYSTEM_PROMPT = `You are N'Rub Job (น้องรับจบ), a caring and clinically-informed AI companion on the MindHub platform. You conduct structured mental wellness conversations following a 7-phase psychological assessment framework adapted for a workplace wellness context.

# PERSONALITY
Warm, non-judgmental, younger-sibling energy. In Thai, call user "พี่" and refer to yourself as "ผม/น้อง." Respond in the SAME LANGUAGE the user writes in (Thai or English).

# CORE BEHAVIOR RULES
1. ANSWER FIRST, SUPPORT SECOND — If the user asks a question, answer it directly and clearly first, THEN offer emotional support or ask follow-up. Never dodge the question.
2. Keep replies short and conversational (2-4 sentences typically), unless the user asks for detail.
3. Never diagnose, prescribe medication, or promise things will be fine.
4. Never compare suffering ("others have it worse").
5. Use active listening + reflection ("it sounds like..." / "ฟังดูเหมือนพี่...").

# 7-PHASE CLINICAL ASSESSMENT FRAMEWORK
Based on established psychological assessment models (Drummond/Sheperis/Jones, Keiser University counseling framework, DSM-5 diagnostic process). You progress through these phases naturally — DO NOT force or announce them. Let phases emerge from conversation. Track current phase in <SIGNAL>.

**Phase 1 — RAPPORT**: Greet warmly, establish psychological safety, explain you're an AI companion. Goal: user feels safe to open up.

**Phase 2 — INTAKE**: Gather presenting concerns gently. What brought them today? Duration? Impact on daily life? Any medical/family history they want to share?

**Phase 3 — SCREENING**: Weave in clinical screening items conversationally (NOT as a checklist). Based on DSM-5 symptom patterns, embed items from:
- PHQ-9 (depression, 9 items, 2-week window): interest/pleasure loss, depressed mood, sleep changes, fatigue, appetite, worthlessness, concentration, psychomotor, thoughts of death
- GAD-7 (anxiety, 7 items): nervousness, uncontrollable worry, excessive worry, trouble relaxing, restlessness, irritability, fear
- PSS (perceived stress, 10 items): control, ability to handle problems, feeling overwhelmed
Score implicitly. Don't ask "on a scale of 1-10" unless natural.

**Phase 4 — MSE (Mental Status Examination)**: Observe through conversation: thought content and organization, speech patterns, emotional regulation, insight into their own state, motor activity (mentioned), interpersonal style. Note any red flags.

**Phase 5 — INTEGRATION**: Cross-check self-report with patterns you've observed. Check for cultural/linguistic factors. Identify convergent themes across sessions. Look for discrepancies.

**Phase 6 — FORMULATION**: Biopsychosocial synthesis. Translate findings into accessible language ("It sounds like you have a lot on your plate at work AND poor sleep amplifying everything") — NOT jargon like "elevated GAD-7." Identify strengths and challenges.

**Phase 7 — SUPPORT / REFORMULATION**: Offer techniques (breathing, grounding, reframing, behavioral activation) OR escalate to professional. Revisit goals. Remain flexible — loop back to earlier phases if new info emerges.

# TECHNIQUES YOU CAN OFFER (Phase 7)
- Box breathing (4-4-4-4), 4-7-8 breathing
- 5-4-3-2-1 grounding for anxiety
- Cognitive reframing (gentle)
- Values clarification
- Small behavioral activation suggestions
- Sleep hygiene basics

# RISK TRIAGE
- **Level 1** (everyday): work stress, bad sleep, annoying coworker → respond normally
- **Level 2** (persistent): sustained burnout, feeling worthless, crying often, appetite loss, PHQ-9 moderate → validate strongly, suggest professional support
- **Level 3** (CRISIS): self-harm ideation, suicidal thoughts, harming others, abuse disclosure → STOP normal flow:
  - Serious acknowledgment, not alarm
  - Thai hotlines: 1323 (Mental Health 24/7), Samaritans 02-713-6793, Emergency 1669
  - Ask "are you safe right now?" / "ตอนนี้พี่ปลอดภัยไหมครับ?"
  - Stay present, do not leave them

# MANDATORY METADATA (every reply, end)
Append this block AFTER visible reply (frontend strips it):

<SIGNAL>
{
  "phase": 1,
  "phase_label": "rapport",
  "risk_level": 1,
  "primary_emotion": "stress",
  "emotion_intensity": 5,
  "topic_tags": ["workload"],
  "escalation_recommended": false,
  "mascot_mood": "neutral",
  "phq9_score": 0,
  "gad7_score": 0,
  "pss_score": 0,
  "session_summary_update": "A short first-person insight written in the user's voice (e.g., 'I notice my stress spikes when I skip lunch'). Leave empty string if no meaningful insight this turn. This will be shown back to the user as a reflection quote, so it must be a REAL insight, not a generic summary.",
  "next_phase_readiness": 0.3
}
</SIGNAL>

Field specs:
- phase: 1-7 (current phase)
- phase_label: rapport|intake|screening|mse|integration|formulation|support
- risk_level: 1|2|3
- primary_emotion: stress|anxiety|sadness|anger|burnout|loneliness|neutral|positive
- emotion_intensity: 1-10
- topic_tags: any of: workload|manager|coworker|work_life_balance|career|health|family|financial|sleep|other
- mascot_mood: happy|neutral|stressed|sad
- phq9_score: running estimate 0-27 (increment as you observe symptoms)
- gad7_score: running estimate 0-21
- pss_score: running estimate 0-40
- session_summary_update: this gets shown back to the user as a reflection — write in first-person user voice, be specific, short (<100 chars). Empty string OK if nothing new
- next_phase_readiness: 0-1, how ready to advance to next phase`;

// ============ AUTH ============
const CREDS = {
  'abc123@gmail.com': { password: '12345678', role: 'employee', name: 'Alex Chen', id: 'EMP-4729' },
  'admin999@gmail.com': { password: '99999999', role: 'hr', name: 'Admin (HR)', id: 'HR-001' }
};
let currentUser = null;
let hasConsented = false;

function openConsent() {
  document.getElementById('consent-modal').classList.add('show');
}
function closeConsent() {
  document.getElementById('consent-modal').classList.remove('show');
  ['consent-chk-1','consent-chk-2','consent-chk-3'].forEach(id => { document.getElementById(id).checked = false; });
  updateConsent();
}
function updateConsent() {
  const all = ['consent-chk-1','consent-chk-2','consent-chk-3'].every(id => document.getElementById(id).checked);
  document.getElementById('btn-agree').disabled = !all;
}
function agreeConsent() {
  hasConsented = true;
  localStorage.setItem('mindhub_consented', '1');
  document.getElementById('consent-modal').classList.remove('show');
  goto('login');
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  errEl.classList.remove('show');
  const user = CREDS[email];
  if (!user || user.password !== pw) { errEl.classList.add('show'); return; }
  currentUser = { email, ...user };
  localStorage.setItem('mindhub_user', JSON.stringify(currentUser));

  document.getElementById('top-nav').style.display = 'flex';
  document.getElementById('top-user').style.display = 'flex';
  document.getElementById('user-avatar').textContent = user.name[0];
  document.getElementById('user-name').textContent = user.name;
  document.getElementById('user-role').textContent = user.role === 'hr' ? 'HR · Full Access' : 'Employee · #' + user.id;

  if (user.role === 'hr') {
    document.getElementById('nav-hr').style.display = 'inline-block';
    document.getElementById('nav-chat').style.display = 'none';
    document.getElementById('nav-data').style.display = 'none';
    goto('hr');
  } else {
    document.getElementById('nav-hr').style.display = 'none';
    document.getElementById('nav-chat').style.display = 'inline-block';
    document.getElementById('nav-data').style.display = 'inline-block';
    loadUserSessions();
    seedDemoSanctuary();
    refreshSanctuary();
    goto('employee');
    showMascot();
  }
}

// Seed some demo data on first-ever login so the sanctuary isn't empty for pitch demo
function seedDemoSanctuary() {
  const key = sanctuaryStorageKey();
  if (!key) return;
  const existing = localStorage.getItem(key);
  if (existing) return; // Already has data, don't overwrite
  const seed = emptySanctuary();
  // Seed with a handful of plants from "past days"
  const demoPlants = [
    { emoji: '🌱', type: 'seedling', rare: false, x: 15, y: 70, size: 1.0, source: 'chat' },
    { emoji: '🌿', type: 'grass', rare: false, x: 30, y: 75, size: 1.1, source: 'chat' },
    { emoji: '🌼', type: 'flower_yellow', rare: false, x: 50, y: 72, size: 1.0, source: 'breathing' },
    { emoji: '🌸', type: 'flower_pink', rare: false, x: 68, y: 78, size: 1.2, source: 'chat' },
    { emoji: '🌻', type: 'sunflower', rare: false, x: 85, y: 68, size: 1.3, source: 'breathing' },
    { emoji: '🍀', type: 'leaf', rare: false, x: 22, y: 85, size: 0.9, source: 'chat' },
    { emoji: '🌷', type: 'tulip', rare: false, x: 42, y: 88, size: 1.0, source: 'chat' }
  ];
  demoPlants.forEach((p, i) => {
    seed.plants.push({
      id: 'seed_' + i,
      ...p,
      dateEarned: Date.now() - (7 - i) * 24 * 60 * 60 * 1000
    });
  });
  // Seed visits and counters
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    seed.daysVisited.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`);
  }
  seed.chatCount = 5;
  seed.breathingCount = 2;
  seed.uniqueEmotions = ['stress', 'anxiety', 'burnout'];
  seed.maxPhase = 3;
  // Seed vault
  seed.vault = [
    { text: "I notice my stress spikes when I don't eat lunch.", date: Date.now() - 2 * 86400000 },
    { text: "Saying 'no' to a meeting didn't break anything.", date: Date.now() - 4 * 86400000 },
    { text: "Sleep affects my mood more than I realized.", date: Date.now() - 6 * 86400000 }
  ];
  // Seed milestones based on derived state
  saveSanctuary(seed);
  checkMilestones();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('mindhub_user');
  document.getElementById('top-nav').style.display = 'none';
  document.getElementById('top-user').style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  hideMascot();
  goto('landing');
}

// ============ VIEW ROUTING ============
function goto(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
  if (name === 'hr') { document.getElementById('nav-hr').classList.add('active'); hideMascot(); }
  window.scrollTo(0, 0);
}

function gotoEmployeeTab(tab) {
  goto('employee');
  switchEmpTab(tab);
  showMascot();
}

function switchEmpTab(tab) {
  document.querySelectorAll('.emp-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.side-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.getElementById('nav-' + tab);
  if (navBtn) navBtn.classList.add('active');
  if (tab === 'data') drawPersonalChart();
  if (tab === 'sanctuary') refreshSanctuary();
}

// ============ MASCOT ============
function showMascot() { document.getElementById('mascot-fab').classList.remove('hidden'); }
function hideMascot() { document.getElementById('mascot-fab').classList.add('hidden'); }

(function setupMascotDrag() {
  const fab = document.getElementById('mascot-fab');
  let dragging = false, startX, startY, initialX, initialY, moved = false;
  fab.addEventListener('mousedown', (e) => {
    dragging = true; moved = false;
    startX = e.clientX; startY = e.clientY;
    const rect = fab.getBoundingClientRect();
    initialX = rect.left; initialY = rect.top;
    fab.style.right = 'auto'; fab.style.bottom = 'auto';
    fab.style.left = initialX + 'px'; fab.style.top = initialY + 'px';
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    fab.style.left = (initialX + dx) + 'px';
    fab.style.top = (initialY + dy) + 'px';
  });
  document.addEventListener('mouseup', (e) => {
    if (dragging && moved) e.stopPropagation();
    dragging = false;
    setTimeout(() => { moved = false; }, 100);
  });
  fab.addEventListener('click', (e) => { if (moved) e.stopImmediatePropagation(); }, true);
})();

function setMascotMood(mood) {
  const grad = document.querySelector('#mascot-fab #bodyGrad2');
  if (!grad) return;
  const moods = {
    happy: ['#86efac', '#10b981'],
    neutral: ['#60a5fa', '#2563eb'],
    stressed: ['#fdba74', '#ea580c'],
    sad: ['#cbd5e1', '#64748b']
  };
  const m = moods[mood] || moods.neutral;
  grad.querySelector('stop:first-child').setAttribute('stop-color', m[0]);
  grad.querySelector('stop:last-child').setAttribute('stop-color', m[1]);
}

// ============ CHAT + PERSISTENCE ============
let sessions = [];
let activeSessionId = null;
let currentPhase = 1;

function userStorageKey() {
  return currentUser ? `mindhub_sessions_${currentUser.email}` : null;
}

function loadUserSessions() {
  const key = userStorageKey();
  if (!key) return;
  try {
    sessions = JSON.parse(localStorage.getItem(key) || '[]');
  } catch(e) { sessions = []; }
  // Load active session id
  const lastActive = localStorage.getItem(key + '_active');
  if (lastActive && sessions.find(s => s.id === lastActive)) {
    activeSessionId = lastActive;
  } else if (sessions.length > 0) {
    activeSessionId = sessions[0].id;
  } else {
    activeSessionId = null;
  }
  renderSessionList();
  renderActiveSession();
}

function saveSessions() {
  const key = userStorageKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(sessions));
  if (activeSessionId) localStorage.setItem(key + '_active', activeSessionId);
}

function newSession() {
  const sid = 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  const s = {
    id: sid,
    title: I18N[currentLang].session_untitled,
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    phase: 1,
    lastSignal: null
  };
  sessions.unshift(s);
  activeSessionId = sid;
  currentPhase = 1;
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function switchSession(sid) {
  activeSessionId = sid;
  const s = sessions.find(x => x.id === sid);
  if (s) currentPhase = s.phase || 1;
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function deleteSession(sid, ev) {
  if (ev) ev.stopPropagation();
  if (!confirm(I18N[currentLang].confirm_delete)) return;
  sessions = sessions.filter(s => s.id !== sid);
  if (activeSessionId === sid) {
    activeSessionId = sessions.length > 0 ? sessions[0].id : null;
  }
  saveSessions();
  renderSessionList();
  renderActiveSession();
}

function renderSessionList() {
  const list = document.getElementById('session-list');
  if (!list) return;
  if (sessions.length === 0) {
    list.innerHTML = `<div class="session-row empty">${I18N[currentLang].empty_sessions}</div>`;
    return;
  }
  list.innerHTML = sessions.map(s => {
    const d = new Date(s.updatedAt);
    const dateStr = d.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', day: 'numeric' });
    const timeStr = d.toLocaleTimeString(currentLang === 'th' ? 'th-TH' : 'en-US', { hour: 'numeric', minute: '2-digit' });
    const active = s.id === activeSessionId ? 'active' : '';
    const safeTitle = (s.title || I18N[currentLang].session_untitled).replace(/[<>"'&]/g, m => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[m]));
    return `<div class="session-row ${active}" onclick="switchSession('${s.id}')">
      <button class="s-delete" onclick="deleteSession('${s.id}', event)">✕</button>
      <div class="s-title">${safeTitle}</div>
      <div class="s-meta">${dateStr} · ${timeStr} · ${s.messages.length} msgs</div>
    </div>`;
  }).join('');
}

function renderActiveSession() {
  const messagesEl = document.getElementById('messages');
  if (!messagesEl) return;
  messagesEl.innerHTML = '';
  const s = sessions.find(x => x.id === activeSessionId);
  if (!s || s.messages.length === 0) {
    appendMsg('ai', I18N[currentLang].greeting_initial, false);
  } else {
    s.messages.forEach(m => {
      if (m.role === 'user') {
        appendMsg('user', m.content, false);
      } else {
        // Strip signal block from displayed content
        const visible = (m.content || '').replace(/<SIGNAL>[\s\S]*?<\/SIGNAL>/, '').trim();
        appendMsg('ai', visible, false);
      }
    });
  }
  currentPhase = (s && s.phase) || 1;
  updatePhaseTag();
  if (s && s.lastSignal && s.lastSignal.mascot_mood) setMascotMood(s.lastSignal.mascot_mood);
}

function updatePhaseTag() {
  const tag = document.getElementById('phase-tag');
  if (!tag) return;
  tag.textContent = I18N[currentLang]['phase_label_' + currentPhase] || `PHASE ${currentPhase}`;
}

function appendMsg(role, text, doScroll = true) {
  const messagesEl = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  messagesEl.appendChild(div);
  if (doScroll) messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

function appendTyping() {
  const messagesEl = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

async function sendMessage() {
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('send');
  const text = inputEl.value.trim();
  if (!text) return;

  // Ensure there's an active session
  if (!activeSessionId) newSession();
  const session = sessions.find(s => s.id === activeSessionId);

  appendMsg('user', text);
  session.messages.push({ role: 'user', content: text });
  // Title = first user message (truncated)
  if (session.title === I18N[currentLang].session_untitled || session.messages.filter(m => m.role === 'user').length === 1) {
    session.title = text.slice(0, 40) + (text.length > 40 ? '…' : '');
  }
  session.updatedAt = Date.now();
  inputEl.value = '';
  inputEl.style.height = 'auto';
  sendBtn.disabled = true;

  const typingEl = appendTyping();

  try {
    // Build message history for Gemini API (role: user/model)
    const geminiContents = session.messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(geminiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: geminiContents,
        generationConfig: { maxOutputTokens: 1000, temperature: 0.7 }
      })
    });
    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(`API ${response.status}: ${errBody.error?.message || response.statusText}`);
    }
    const data = await response.json();
    const fullText = (data.candidates?.[0]?.content?.parts || []).map(p => p.text).join('\n');
    const visibleText = fullText.replace(/<SIGNAL>[\s\S]*?<\/SIGNAL>/, '').trim();

    const sigMatch = fullText.match(/<SIGNAL>([\s\S]*?)<\/SIGNAL>/);
    let signal = null;
    if (sigMatch) {
      try {
        signal = JSON.parse(sigMatch[1].trim());
        if (signal.mascot_mood) setMascotMood(signal.mascot_mood);
        if (signal.phase) {
          currentPhase = signal.phase;
          session.phase = signal.phase;
          updatePhaseTag();
        }
        session.lastSignal = signal;
        // Feed sanctuary from signal
        if (currentUser && currentUser.role === 'employee') {
          registerEmotionSignal(signal.primary_emotion, signal.phase);
          // If session_summary is a meaningful insight, store to vault
          if (signal.session_summary_update && signal.session_summary_update.length > 10) {
            // Only save if user has been in a meaningful phase (not just rapport)
            if (signal.phase >= 2 && session.messages.filter(m => m.role === 'user').length >= 2) {
              addVaultReflection(signal.session_summary_update);
            }
          }
          // Grow a plant after every 3rd user message in this session (reward consistency, not volume)
          const userMsgCount = session.messages.filter(m => m.role === 'user').length;
          if (userMsgCount > 0 && userMsgCount % 3 === 1) {
            growPlant('chat');
          }
        }
      } catch(e) { console.warn('Bad signal JSON', e); }
    }

    typingEl.innerHTML = '';
    typingEl.textContent = visibleText;
    session.messages.push({ role: 'assistant', content: fullText });
    session.updatedAt = Date.now();
    saveSessions();
    renderSessionList();
  } catch (err) {
    typingEl.className = 'msg error';
    typingEl.textContent = 'Error: ' + err.message + '\n\nMake sure your Gemini API key is valid. Get one free at https://aistudio.google.com/apikey';
    session.messages.push({ role: 'assistant', content: `[ERROR] ${err.message}` });
    saveSessions();
  } finally {
    sendBtn.disabled = false;
    inputEl.focus();
  }
}

// ============ HR BAR CHART ============
function renderBarChart() {
  const bc = document.getElementById('bar-chart');
  if (!bc) return;
  const barData = [
    { d: 'M', low: 30, med: 12, high: 3 }, { d: 'T', low: 34, med: 15, high: 3 },
    { d: 'W', low: 40, med: 22, high: 6 }, { d: 'T', low: 42, med: 24, high: 5 },
    { d: 'F', low: 38, med: 17, high: 3 }, { d: 'S', low: 24, med: 7, high: 1 },
    { d: 'S', low: 22, med: 5, high: 1 }, { d: 'M', low: 40, med: 18, high: 3 },
    { d: 'T', low: 45, med: 24, high: 4 }, { d: 'W', low: 48, med: 28, high: 6 },
    { d: 'T', low: 50, med: 32, high: 6 }, { d: 'F', low: 48, med: 27, high: 4 },
    { d: 'S', low: 30, med: 9, high: 2 }, { d: 'S', low: 26, med: 7, high: 2 }
  ];
  const maxTotal = Math.max(...barData.map(d => d.low + d.med + d.high));
  bc.innerHTML = '';
  barData.forEach(d => {
    const total = d.low + d.med + d.high;
    const stack = document.createElement('div');
    stack.className = 'bar-stack';
    stack.setAttribute('data-label', d.d);
    stack.title = `${total} sessions · Low:${d.low} Med:${d.med} High:${d.high}`;
    stack.style.height = (total / maxTotal * 100) + '%';
    ['low', 'med', 'high'].forEach(lvl => {
      const seg = document.createElement('div');
      seg.className = 'bar-seg ' + lvl;
      seg.style.flex = d[lvl];
      stack.appendChild(seg);
    });
    bc.appendChild(stack);
  });
}

function renderHeatmap() {
  const teams = ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'];
  const heatColors = ['#10b981', '#6ee7b7', '#fde68a', '#fb923c', '#ef4444'];
  const hm = document.getElementById('heatmap');
  if (!hm) return;
  hm.innerHTML = '';
  // Use deterministic patterns instead of random for stable display
  const patterns = [
    [1,1,2,1,2,2,1,1,2,2,3,2,1,1],
    [2,2,3,2,3,3,2,1,2,3,3,4,3,2],
    [1,2,1,2,1,2,2,1,2,2,1,2,1,1],
    [3,3,4,3,4,4,3,2,3,4,4,4,3,3],
    [0,1,0,1,1,0,1,0,1,1,0,1,0,0],
    [1,1,1,2,1,1,2,1,1,2,2,1,1,1]
  ];
  teams.forEach((t, ti) => {
    const row = document.createElement('div');
    row.className = 'heatmap-row';
    row.innerHTML = `<div class="team">${t}</div>`;
    const cells = document.createElement('div');
    cells.className = 'heatmap-cells';
    for (let i = 0; i < 14; i++) {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      const level = patterns[ti][i];
      cell.style.background = heatColors[level];
      cell.title = `Day ${i + 1}: risk level ${level}`;
      cells.appendChild(cell);
    }
    row.appendChild(cells);
    hm.appendChild(row);
  });
}

function drawPersonalChart() {
  const container = document.getElementById('personal-chart');
  if (!container) return;
  const w = container.clientWidth || 600, h = 220;
  const moods = [6, 5, 7, 4, 5, 6, 7, 5, 4, 5, 6, 7, 6, 6];
  const stress = [5, 7, 4, 8, 7, 6, 5, 7, 8, 7, 6, 4, 5, 7];
  const pad = 30;
  const cx = x => pad + (x / (moods.length - 1)) * (w - pad * 2);
  const cy = v => h - pad - (v / 10) * (h - pad * 2);
  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">`;
  for (let i = 0; i <= 10; i += 2) {
    const y = cy(i);
    svg += `<line x1="${pad}" y1="${y}" x2="${w - pad}" y2="${y}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>`;
    svg += `<text x="${pad - 8}" y="${y + 4}" font-size="10" fill="#94a3b8" text-anchor="end" font-family="JetBrains Mono">${i}</text>`;
  }
  const moodPath = moods.map((v, i) => `${i === 0 ? 'M' : 'L'}${cx(i)},${cy(v)}`).join(' ');
  svg += `<path d="${moodPath}" stroke="#2563eb" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  moods.forEach((v, i) => { svg += `<circle cx="${cx(i)}" cy="${cy(v)}" r="3.5" fill="#2563eb"/>`; });
  const stressPath = stress.map((v, i) => `${i === 0 ? 'M' : 'L'}${cx(i)},${cy(v)}`).join(' ');
  svg += `<path d="${stressPath}" stroke="#ef4444" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="4,3"/>`;
  stress.forEach((v, i) => { svg += `<circle cx="${cx(i)}" cy="${cy(v)}" r="3.5" fill="#ef4444"/>`; });
  svg += `</svg>`;
  container.innerHTML = svg;
}

// ============ SANCTUARY / GAMIFICATION ============
// Garden state: { plants: [{id, type, x, y, size, dateEarned, source}], daysVisited: [YYYY-MM-DD, ...], milestones: {id: unlockedDate}, vault: [{text, date}] }
const PLANT_TYPES = [
  { type: 'seedling', emoji: '🌱', weight: 10 },
  { type: 'grass', emoji: '🌿', weight: 9 },
  { type: 'flower_yellow', emoji: '🌼', weight: 7 },
  { type: 'flower_pink', emoji: '🌸', weight: 6 },
  { type: 'flower_red', emoji: '🌺', weight: 5 },
  { type: 'tulip', emoji: '🌷', weight: 5 },
  { type: 'leaf', emoji: '🍀', weight: 4 },
  { type: 'sunflower', emoji: '🌻', weight: 3 },
  { type: 'cactus', emoji: '🌵', weight: 2 },
  { type: 'tree_small', emoji: '🌳', weight: 2, rare: true },
  { type: 'cherry', emoji: '🌸', weight: 1, rare: true },
  { type: 'mushroom', emoji: '🍄', weight: 1, rare: true },
  { type: 'rainbow', emoji: '🌈', weight: 1, rare: true }
];

const MILESTONES = [
  { id: 'new_moon', icon: '🌑', titleKey: 'm_new_moon_t', descKey: 'm_new_moon_d', check: (s) => s.chatCount >= 1 },
  { id: 'first_light', icon: '🌒', titleKey: 'm_first_light_t', descKey: 'm_first_light_d', check: (s) => s.uniqueEmotions >= 5 },
  { id: 'half_moon', icon: '🌓', titleKey: 'm_half_moon_t', descKey: 'm_half_moon_d', check: (s) => s.breathingCount >= 1 },
  { id: 'waxing', icon: '🌔', titleKey: 'm_waxing_t', descKey: 'm_waxing_d', check: (s) => s.vault.length >= 3 },
  { id: 'aurora', icon: '🌌', titleKey: 'm_aurora_t', descKey: 'm_aurora_d', check: (s) => s.maxPhase >= 5 },
  { id: 'full_moon', icon: '🌕', titleKey: 'm_full_moon_t', descKey: 'm_full_moon_d', check: (s) => s.daysVisited.length >= 30 }
];

function sanctuaryStorageKey() {
  return currentUser ? `mindhub_sanctuary_${currentUser.email}` : null;
}

function loadSanctuary() {
  const key = sanctuaryStorageKey();
  if (!key) return emptySanctuary();
  try {
    const s = JSON.parse(localStorage.getItem(key) || 'null');
    if (!s) return emptySanctuary();
    // Ensure all fields exist
    return Object.assign(emptySanctuary(), s);
  } catch(e) { return emptySanctuary(); }
}

function emptySanctuary() {
  return {
    plants: [],
    daysVisited: [],
    milestones: {},
    vault: [],
    chatCount: 0,
    breathingCount: 0,
    uniqueEmotions: [],
    maxPhase: 1
  };
}

function saveSanctuary(s) {
  const key = sanctuaryStorageKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(s));
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function registerVisit() {
  const s = loadSanctuary();
  const today = todayKey();
  if (!s.daysVisited.includes(today)) {
    s.daysVisited.push(today);
    saveSanctuary(s);
  }
}

// Grow a plant — reward for a self-care action
function growPlant(source) {
  const s = loadSanctuary();
  // Pick plant type weighted
  const total = PLANT_TYPES.reduce((a, p) => a + p.weight, 0);
  let r = Math.random() * total;
  let picked = PLANT_TYPES[0];
  for (const p of PLANT_TYPES) {
    r -= p.weight;
    if (r <= 0) { picked = p; break; }
  }
  // Position: spread out in the canvas
  const positions = s.plants.map(p => ({x:p.x, y:p.y}));
  let x, y, tries = 0;
  do {
    x = 5 + Math.random() * 90;
    y = 25 + Math.random() * 70; // top 25% reserved for sky
    tries++;
  } while (tries < 20 && positions.some(p => Math.abs(p.x-x) < 8 && Math.abs(p.y-y) < 8));
  const plant = {
    id: 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2,6),
    type: picked.type,
    emoji: picked.emoji,
    rare: !!picked.rare,
    x, y,
    size: 0.8 + Math.random() * 0.5,
    dateEarned: Date.now(),
    source: source || 'unknown'
  };
  s.plants.push(plant);
  // Update counters
  if (source === 'chat') s.chatCount = (s.chatCount||0) + 1;
  if (source === 'breathing') s.breathingCount = (s.breathingCount||0) + 1;
  // Register visit
  const today = todayKey();
  if (!s.daysVisited.includes(today)) s.daysVisited.push(today);
  saveSanctuary(s);
  renderGarden();
  checkMilestones();
  showGrowToast(I18N[currentLang]['toast_' + (source === 'breathing' ? 'breathing' : source === 'reflection' ? 'reflection' : 'plant')]);
  return plant;
}

function addVaultReflection(text) {
  if (!text || text.length < 5) return;
  const s = loadSanctuary();
  s.vault.unshift({ text: text.slice(0, 200), date: Date.now() });
  if (s.vault.length > 50) s.vault = s.vault.slice(0, 50);
  saveSanctuary(s);
  renderVault();
  checkMilestones();
}

function registerEmotionSignal(emotion, phase) {
  if (!currentUser) return;
  const s = loadSanctuary();
  if (emotion && !s.uniqueEmotions.includes(emotion)) {
    s.uniqueEmotions.push(emotion);
  }
  if (phase && phase > (s.maxPhase || 1)) s.maxPhase = phase;
  saveSanctuary(s);
  checkMilestones();
}

function checkMilestones() {
  const s = loadSanctuary();
  // Derive counters
  const state = {
    chatCount: s.chatCount || 0,
    breathingCount: s.breathingCount || 0,
    uniqueEmotions: (s.uniqueEmotions || []).length,
    daysVisited: s.daysVisited || [],
    vault: s.vault || [],
    maxPhase: s.maxPhase || 1
  };
  let changed = false;
  MILESTONES.forEach(m => {
    if (!s.milestones[m.id] && m.check(state)) {
      s.milestones[m.id] = Date.now();
      changed = true;
      showGrowToast(I18N[currentLang].toast_milestone + ': ' + (I18N[currentLang][m.titleKey] || m.id));
    }
  });
  if (changed) saveSanctuary(s);
  renderMilestones();
}

function renderGarden() {
  const canvas = document.getElementById('garden-canvas');
  const empty = document.getElementById('garden-empty');
  if (!canvas) return;
  const s = loadSanctuary();
  document.getElementById('garden-count').textContent = s.plants.length;
  document.getElementById('garden-days').textContent = s.daysVisited.length;
  document.getElementById('garden-rare').textContent = s.plants.filter(p => p.rare).length;

  if (s.plants.length === 0) {
    canvas.querySelector('svg')?.remove();
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Build SVG garden
  const w = canvas.clientWidth || 600;
  const h = 320;
  let svg = `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">`;
  // Sky gradient background
  svg += `<defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd" stop-opacity="0"/>
      <stop offset="100%" stop-color="#f0fdf4" stop-opacity="0"/>
    </linearGradient>
  </defs>`;
  // Ground line (subtle)
  svg += `<line x1="0" y1="95" x2="100" y2="95" stroke="#86efac" stroke-width="0.3" opacity="0.5"/>`;
  // Sun
  svg += `<circle cx="85" cy="15" r="5" fill="#fde68a" opacity="0.7"/>`;
  svg += `<circle cx="85" cy="15" r="7" fill="#fde68a" opacity="0.2"/>`;
  // A few background hills
  svg += `<path d="M 0 92 Q 20 85, 40 90 T 80 88 T 100 90 L 100 100 L 0 100 Z" fill="#86efac" opacity="0.25"/>`;
  svg += `<path d="M 0 95 Q 25 90, 50 94 T 100 93 L 100 100 L 0 100 Z" fill="#6ee7b7" opacity="0.3"/>`;

  // Plants — sort by y so closer plants draw on top
  const sorted = [...s.plants].sort((a, b) => a.y - b.y);
  sorted.forEach((p, i) => {
    const fontSize = 4 * p.size;
    // Animation delay for cascading effect on render
    svg += `<g style="transform-origin: ${p.x}% ${p.y + 5}%; animation: plantGrow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s backwards;">`;
    if (p.rare) {
      // Glow effect for rare plants
      svg += `<circle cx="${p.x}" cy="${p.y + 2}" r="3" fill="#fbbf24" opacity="0.3"/>`;
    }
    svg += `<text x="${p.x}" y="${p.y + 5}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle" style="font-family: sans-serif;">${p.emoji}</text>`;
    svg += `</g>`;
  });

  // Butterflies for extra life (if >10 plants)
  if (s.plants.length >= 10) {
    svg += `<text x="30" y="40" font-size="3" opacity="0.8">🦋</text>`;
  }
  if (s.plants.length >= 20) {
    svg += `<text x="70" y="55" font-size="2.5" opacity="0.8">🐝</text>`;
  }
  svg += `</svg>`;
  canvas.innerHTML = svg + (empty ? empty.outerHTML : '');
  // Restore empty node reference
  if (!document.getElementById('garden-empty') && empty) {
    canvas.appendChild(empty);
    empty.style.display = 'none';
  }
}

function renderMilestones() {
  const list = document.getElementById('milestones-list');
  if (!list) return;
  const s = loadSanctuary();
  list.innerHTML = MILESTONES.map(m => {
    const unlocked = !!s.milestones[m.id];
    const title = I18N[currentLang][m.titleKey] || m.id;
    const desc = I18N[currentLang][m.descKey] || '';
    const badge = unlocked ? '✓' : '—';
    return `<div class="milestone-item ${unlocked ? 'unlocked' : ''}">
      <div class="milestone-icon">${m.icon}</div>
      <div class="milestone-text"><span class="m-title">${title}</span>${desc}</div>
      <div class="milestone-badge">${badge}</div>
    </div>`;
  }).join('');
}

function renderVault() {
  const list = document.getElementById('vault-list');
  if (!list) return;
  const s = loadSanctuary();
  if (s.vault.length === 0) {
    list.innerHTML = `<div class="vault-empty">${I18N[currentLang].vault_empty}</div>`;
    return;
  }
  list.innerHTML = s.vault.slice(0, 10).map(v => {
    const d = new Date(v.date);
    const dateStr = d.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const safe = v.text.replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
    return `<div class="vault-item">${safe}<span class="v-date">${dateStr}</span></div>`;
  }).join('');
}

function refreshSanctuary() {
  if (!currentUser || currentUser.role !== 'employee') return;
  registerVisit();
  renderGarden();
  renderMilestones();
  renderVault();
}

// Growth toast
let toastTimeout = null;
function showGrowToast(message) {
  const toast = document.getElementById('grow-toast');
  if (!toast) return;
  document.getElementById('toast-msg').textContent = message || '';
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ============ BREATHING EXERCISE ============
let breatheInterval = null;
let breatheStartTime = 0;

function startBreathing() {
  const overlay = document.getElementById('breathe-overlay');
  const circle = document.getElementById('breathe-circle');
  const instruction = document.getElementById('breathe-instruction');
  const timer = document.getElementById('breathe-timer');
  overlay.classList.add('show');
  breatheStartTime = Date.now();
  let phase = 0; // 0=inhale, 1=hold, 2=exhale, 3=hold
  const DURATION_MS = 60000; // 1 minute
  const STEP_MS = 4000;
  const phases = [
    { cls: 'inhale', key: 'breathe_inhale' },
    { cls: 'inhale', key: 'breathe_hold' },
    { cls: 'exhale', key: 'breathe_exhale' },
    { cls: 'exhale', key: 'breathe_hold' }
  ];
  function step() {
    const p = phases[phase % 4];
    circle.classList.remove('inhale', 'exhale');
    circle.classList.add(p.cls);
    circle.textContent = (phase % 2 === 0) ? (p.cls === 'inhale' ? '↑' : '↓') : '·';
    instruction.textContent = I18N[currentLang][p.key] || '';
    phase++;
  }
  step();
  breatheInterval = setInterval(() => {
    const elapsed = Date.now() - breatheStartTime;
    const remain = Math.max(0, DURATION_MS - elapsed);
    const mm = Math.floor((elapsed) / 60000);
    const ss = Math.floor((elapsed % 60000) / 1000);
    timer.textContent = `${mm}:${String(ss).padStart(2,'0')} / 1:00`;
    if (remain <= 0) {
      completeBreathing();
      return;
    }
    step();
  }, STEP_MS);
}

function completeBreathing() {
  clearInterval(breatheInterval);
  breatheInterval = null;
  const instruction = document.getElementById('breathe-instruction');
  const circle = document.getElementById('breathe-circle');
  instruction.textContent = I18N[currentLang].breathe_done;
  circle.textContent = '💙';
  circle.classList.remove('inhale', 'exhale');
  setTimeout(() => {
    stopBreathing();
    // Reward the user with a plant
    if (currentUser && currentUser.role === 'employee') {
      growPlant('breathing');
    }
  }, 2200);
}

function stopBreathing() {
  const overlay = document.getElementById('breathe-overlay');
  overlay.classList.remove('show');
  if (breatheInterval) { clearInterval(breatheInterval); breatheInterval = null; }
}


function init() {
  // Language
  setLang(currentLang);

  // Chat input auto-resize & Enter
  const input = document.getElementById('input');
  if (input) {
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
  }
  const sendBtn = document.getElementById('send');
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);

  // Login Enter
  const pwEl = document.getElementById('login-password');
  if (pwEl) pwEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });

  // Render HR charts
  renderBarChart();
  renderHeatmap();

  // Persistent auth check
  const savedUser = localStorage.getItem('mindhub_user');
  const consented = localStorage.getItem('mindhub_consented') === '1';
  if (savedUser && consented) {
    try {
      const u = JSON.parse(savedUser);
      // Simulate auto-login for UX (user can still logout)
      document.getElementById('login-email').value = u.email;
      // Don't auto-login password — still require click for safety in demo
    } catch(e) {}
  }

  // ESC closes consent modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const m = document.getElementById('consent-modal');
      if (m.classList.contains('show')) closeConsent();
    }
  });
}

window.addEventListener('load', init);
window.addEventListener('resize', drawPersonalChart);

