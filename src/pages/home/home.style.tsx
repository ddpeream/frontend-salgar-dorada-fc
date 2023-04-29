import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const SectionContent = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
`;

export const Divider = styled.hr`
  width: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
  border: none;
  border-top: 1px solid #ccc;
`;


export const FeatureSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px;
`;

export const FeatureImage = styled.img`
  width: 30%;
`;

export const FeatureText = styled.div`
  width: 50%;
`;

export const FeatureTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const FeatureDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
`;

export const CallToAction = styled.div`
  background-color: #eee;
  padding: 50px;
  text-align: center;
`;

export const CallToActionTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const CallToActionButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
