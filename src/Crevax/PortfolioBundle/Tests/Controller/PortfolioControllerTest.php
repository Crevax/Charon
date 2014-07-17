<?php

namespace Crevax\PortfolioBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PortfolioControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/portfolio');

        $this->assertTrue($crawler->filter('html:contains("Portfolio")')->count() > 0);
    }
}
