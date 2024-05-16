<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ApartmentsController extends AbstractController
{
    #[Route('/{_locale<%app.supported_locales%>}/apartments/1', name: 'app_apartments_first')]
    public function firstApartment(): Response
    {
        return $this->render('apartments/first_apartment.html.twig', [
            'controller_name' => 'ApartmentsController',
        ]);
    }

    #[Route('/{_locale<%app.supported_locales%>}/apartments/2', name: 'app_apartments_second')]
    public function secondApartment(): Response
    {
        return $this->render('apartments/second_apartment.html.twig', [
            'controller_name' => 'ApartmentsController',
        ]);
    }
}
