import virus from "../../assets/images/virus.png";
export const virusImage = virus;

export const vaccines = [
  {
    id: 1,
    name: "Meningitis Vaccine Conjugate",
    description:
      "A single-dose vial vaccine that provides protection against bacterial meningitis, a potentially life-threatening infection.",
    dosage: "Single dose",
    type: "Conjugate",
    availability: "Available",
    targetGroup:
      "Adolescents aged 11–12 years with a booster at 16 years; college students, especially freshmen in dormitories; military recruits; travelers to high-risk areas.",
    image: virus,
  },
  {
    id: 2,
    name: "Hepatitis B Vaccine",
    description:
      "A vaccine that protects against the hepatitis B virus, which affects the liver and can cause chronic disease.",
    dosage: "3 doses",
    type: "Recombinant",
    availability: "Ask on Request",
    targetGroup:
      "All infants at birth; unvaccinated children and adolescents under 19; adults aged 19–59; adults 60 and older with risk factors; healthcare workers.",
    image: virus,
  },
  {
    id: 3,
    name: "HPV Vaccine",
    description:
      "Protects against human papillomavirus infections that can lead to cervical and other cancers.",
    dosage: "2 or 3 doses",
    type: "Subunit",
    availability: "Available",
    targetGroup:
      "All individuals aged 9–26 years; adults aged 27–45 years based on shared clinical decision-making.",
    image: virus,
  },
  {
    id: 4,
    name: "COVID-19 Vaccine (mRNA)",
    description:
      "An mRNA-based vaccine to prevent COVID-19, developed for rapid response to pandemic outbreaks.",
    dosage: "2 doses + booster",
    type: "mRNA",
    availability: "Available",
    targetGroup:
      "Individuals aged 6 months and older; especially recommended for those with underlying health conditions or increased risk of exposure.",
    image: virus,
  },
  {
    id: 5,
    name: "COVID-19 Vaccine (Vector)",
    description:
      "A vector-based vaccine providing immunity against COVID-19 infection.",
    dosage: "2 doses",
    type: "Viral Vector",
    availability: "Ask on Request",
    targetGroup:
      "Adults aged 18 and older; particularly for those who cannot receive mRNA vaccines or prefer vector-based vaccines.",
    image: virus,
  },
  {
    id: 6,
    name: "Yellow Fever Vaccine",
    description:
      "Live vaccine providing long-term protection against yellow fever virus, a mosquito-borne infection.",
    dosage: "Single dose",
    type: "Live attenuated",
    availability: "Available",
    targetGroup:
      "Travelers aged 9 months and older to areas where yellow fever is endemic; residents of endemic regions; required for entry into certain countries.",
    image: virus,
  },
  {
    id: 7,
    name: "Typhoid Vaccine (Conjugate)",
    description:
      "Conjugate vaccine effective in children and adults against typhoid fever.",
    dosage: "Single dose",
    type: "Conjugate",
    availability: "Ask on Request",
    targetGroup:
      "Travelers to regions with high rates of typhoid fever; individuals in close contact with typhoid carriers; residents of endemic areas.",
    image: virus,
  },
  {
    id: 8,
    name: "Measles Vaccine",
    description:
      "Live attenuated vaccine that prevents measles, a highly contagious viral disease.",
    dosage: "2 doses",
    type: "Live attenuated",
    availability: "Not Available",
    targetGroup:
      "Children aged 12–15 months with a second dose at 4–6 years; unvaccinated adults without evidence of immunity.",
    image: virus,
  },
  {
    id: 9,
    name: "Polio Vaccine (IPV)",
    description:
      "Inactivated polio vaccine used for preventing poliovirus infections.",
    dosage: "4 doses",
    type: "Inactivated",
    availability: "Available",
    targetGroup:
      "Children at 2, 4, 6–18 months, and 4–6 years; unvaccinated adults at risk of exposure.",
    image: virus,
  },
  {
    id: 10,
    name: "Polio Vaccine (OPV)",
    description:
      "Oral polio vaccine used globally for polio eradication efforts.",
    dosage: "Multiple doses",
    type: "Live attenuated",
    availability: "Not Available",
    targetGroup:
      "Children in countries where OPV is part of the routine immunization schedule; travelers to areas with active polio transmission.",
    image: virus,
  },
  {
    id: 11,
    name: "Tetanus Toxoid Vaccine",
    description:
      "Toxoid vaccine for the prevention of tetanus, especially after injuries.",
    dosage: "5 doses",
    type: "Toxoid",
    availability: "Available",
    targetGroup:
      "Children at 2, 4, 6, 15–18 months, and 4–6 years; booster every 10 years for adults; pregnant women during each pregnancy.",
    image: virus,
  },
  {
    id: 12,
    name: "DTP Vaccine",
    description:
      "Combination vaccine protecting against diphtheria, tetanus, and pertussis.",
    dosage: "5 doses",
    type: "Toxoid + Inactivated",
    availability: "Ask on Request",
    targetGroup:
      "Children at 2, 4, 6, 15–18 months, and 4–6 years; adolescents and adults as Tdap booster; pregnant women during each pregnancy.",
    image: virus,
  },
  {
    id: 13,
    name: "Influenza Vaccine",
    description:
      "Seasonal flu vaccine formulated annually to match circulating strains.",
    dosage: "Annual dose",
    type: "Inactivated",
    availability: "Available",
    targetGroup:
      "All individuals aged 6 months and older; especially important for young children, elderly, pregnant women, and those with chronic conditions.",
    image: virus,
  },
  {
    id: 14,
    name: "Rabies Vaccine",
    description: "Post-exposure and pre-exposure vaccine against rabies virus.",
    dosage: "3 to 5 doses",
    type: "Inactivated",
    availability: "Ask on Request",
    targetGroup:
      "Individuals exposed to rabies; travelers to areas with high rabies risk; professionals at risk (e.g., veterinarians, animal handlers).",
    image: virus,
  },
  {
    id: 15,
    name: "Mumps Vaccine",
    description:
      "Live attenuated vaccine to prevent mumps, often part of MMR combo.",
    dosage: "2 doses",
    type: "Live attenuated",
    availability: "Not Available",
    targetGroup:
      "Children at 12–15 months and 4–6 years; unvaccinated adults without evidence of immunity.",
    image: virus,
  },
  {
    id: 16,
    name: "Rubella Vaccine",
    description:
      "Prevents rubella infection, especially important for women of childbearing age.",
    dosage: "2 doses",
    type: "Live attenuated",
    availability: "Available",
    targetGroup:
      "Children at 12–15 months and 4–6 years; women of childbearing age without evidence of immunity.",
    image: virus,
  },
  {
    id: 17,
    name: "Rotavirus Vaccine",
    description:
      "Oral vaccine to protect against rotavirus-induced gastroenteritis in infants.",
    dosage: "2 or 3 doses",
    type: "Live attenuated",
    availability: "Available",
    targetGroup:
      "Infants starting at 6 weeks of age; series should be completed by 8 months of age.",
    image: virus,
  },
  {
    id: 18,
    name: "Pneumococcal Conjugate Vaccine (PCV)",
    description:
      "Protects against pneumococcal infections, such as pneumonia, meningitis, and sepsis.",
    dosage: "3 doses",
    type: "Conjugate",
    availability: "Not Available",
    targetGroup:
      "Children under 5 years; adults 65 years and older; individuals with certain medical conditions.",
    image: virus,
  },
  {
    id: 19,
    name: "BCG Vaccine",
    description:
      "Live vaccine for tuberculosis prevention, given shortly after birth.",
    dosage: "Single dose",
    type: "Live attenuated",
    availability: "Available",
    targetGroup:
      "Newborns in countries with high TB prevalence; healthcare workers and others at increased risk of exposure.",
    image: virus,
  },
  {
    id: 20,
    name: "Cholera Vaccine",
    description:
      "Oral vaccine for the prevention of cholera, especially in outbreak regions.",
    dosage: "2 doses",
    type: "Inactivated",
    availability: "Ask on Request",
    targetGroup:
      "Travelers to areas with active cholera transmission; individuals in outbreak settings or with limited access to clean water.",
    image: virus,
  },
];
